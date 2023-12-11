const Joi = require('joi');
const { query } = require('../services/db.service');
const { calorieToConsume, calorieToBurn, drinkTarget } = require('../helpers/calorie.helper');

const getPlan = async (req, res) => {
  try {
    const schema = Joi.object({
      date: Joi.string().isoDate().required(),
    });
    const { value, error } = schema.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const userId = req.user.id;
    const [, profiles] = await query('SELECT TIMESTAMPDIFF(YEAR, birthday, CURDATE()) AS age, gender, weight, height, activity_level FROM profile WHERE user_id = ?', [userId]);
    if (!profiles?.length) return res.status(404).json({ status: 'error', data: null, message: 'Profile data has not been filled in' });
    const {
      age, height, weight, activity_level, gender,
    } = profiles[0];
    const mealTarget = calorieToConsume({
      weight, height, age, gender, activity_level,
    });
    const activityTarget = calorieToBurn({
      weight, height, age, gender, activity_level,
    });

    let [, totalCal] = await query(`
      SELECT SUM(IFNULL((recipe.energy * recipe_plan.ammount), 0) + IFNULL((food.energy * food_plan.ammount DIV 100), 0)) AS total
      FROM plan
        JOIN meal_plan ON (meal_plan.plan_id = plan.id)
        LEFT JOIN recipe_plan ON (recipe_plan.meal_id = meal_plan.id)
        LEFT JOIN food_plan ON (food_plan.meal_id = meal_plan.id) 
        LEFT JOIN recipe ON (recipe.id = recipe_plan.recipe_id)
        LEFT JOIN food ON (food.id = food_plan.food_id)
        WHERE plan.date = ? AND plan.user_id = ?
    `, [value.date, userId]);
    totalCal = totalCal?.length ? +totalCal[0].total : 0;

    let [, meals] = await query(`
      SELECT meal_plan.id, meal_plan.category, meal_plan.type,
      recipe.id AS recipe_id, recipe.photo, recipe.energy * recipe_plan.ammount AS recipe_energy, recipe.name AS recipe_name,
      food.id AS food_id, food.name AS food_name, (food.energy * food_plan.ammount) DIV 100 AS food_energy,
      food_plan.ammount AS food_ammount, food_plan.note AS food_note,
      recipe_plan.ammount AS recipe_ammount, recipe_plan.note AS recipe_note
       FROM plan
         JOIN meal_plan ON (meal_plan.plan_id = plan.id)
         LEFT JOIN recipe_plan ON (recipe_plan.meal_id = meal_plan.id)
         LEFT JOIN food_plan ON (food_plan.meal_id = meal_plan.id) 
         LEFT JOIN recipe ON (recipe.id = recipe_plan.recipe_id)
         LEFT JOIN food ON (food.id = food_plan.food_id)
         WHERE plan.date = ? AND plan.user_id = ?
         ORDER BY meal_plan.id DESC
    `, [value.date, userId]);

    meals = meals.map(({
      id, category, type, recipe_id, photo,
      recipe_energy, recipe_name, food_id, food_name, food_energy,
      recipe_ammount, food_ammount, recipe_note, food_note,
    }) => {
      if (type === 'food') {
        return {
          id: food_id,
          plan_id: id,
          name: food_name,
          category,
          type,
          energy: food_energy,
          ammount: food_ammount,
          note: food_note,
        };
      }
      return {
        id: recipe_id,
        plan_id: id,
        name: recipe_name,
        category,
        type,
        energy: recipe_energy,
        photo,
        ammount: recipe_ammount,
        note: recipe_note,
      };
    });

    let [, burned] = await query(`
    SELECT SUM(activity.met * 3.5 * profile.weight * activity_plan.duration DIV 200) AS total FROM plan
      JOIN activity_plan ON (activity_plan.plan_id = plan.id)
      JOIN activity ON (activity.id = activity_plan.activity_id)
      JOIN profile ON (profile.user_id = plan.user_id)
      WHERE plan.date = '2023-12-11' AND plan.user_id = 10
    `);
    burned = burned?.length ? +burned[0].total : 0;

    let [, activities] = await query(`
    SELECT activity.id, activity_plan.id AS plan_id, activity.name, 
      activity.met * 3.5 * profile.weight * activity_plan.duration DIV 200 AS energy,
      activity_plan.duration, activity_plan.time, activity_plan.note FROM plan
      JOIN activity_plan ON (activity_plan.plan_id = plan.id)
      JOIN activity ON (activity.id = activity_plan.activity_id)
      JOIN profile ON (profile.user_id = plan.user_id)
      WHERE plan.date = ? AND plan.user_id = ?
      ORDER BY activity_plan.time DESC
    `, [value.date, userId]);

    activities = activities?.length ? activities : [];

    let [, drink] = await query(`
      SELECT drink_plan.ammount FROM drink_plan
        JOIN plan ON (drink_plan.plan_id = plan.id)
        WHERE plan.date = ? AND plan.user_id = ?
    `, [value.date, userId]);
    drink = drink?.length ? drink[0].ammount : 0;

    const plan = {
      insight: {
        meal: {
          target: mealTarget,
          consumed: totalCal,
          left: mealTarget < totalCal ? 0 : mealTarget - totalCal,
        },
        activity: {
          target: activityTarget,
          burn: burned,
          left: activityTarget < burned ? 0 : activityTarget - burned,
        },
        drink: {
          target: drinkTarget({ weight }),
          drunk: drink,
          left: drinkTarget({ weight }) < drink ? 0 : drinkTarget({ weight }) - drink,
        },
      },
      meal: {
        breakfast: meals.filter((meal) => meal.category === 'breakfast'),
        lunch: meals.filter((meal) => meal.category === 'lunch'),
        dinner: meals.filter((meal) => meal.category === 'dinner'),
        snack: meals.filter((meal) => meal.category === 'snack'),
      },
      activities,
      drink: {
        glass: drink / 250,
        total_glass: drinkTarget({ weight }) / 250,
      },
      date: value.date,
    };

    return res.json({ status: 'success', data: { plan }, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const addMealPlan = async (req, res) => {
  try {
    const schemaQuery = Joi.object({
      date: Joi.string().isoDate().required(),
    });
    const { value, error } = schemaQuery.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const schemaBody = Joi.object({
      id: Joi.number().integer().required(),
      category: Joi.string().valid('breakfast', 'lunch', 'dinner', 'snack'),
      type: Joi.string().valid('recipe', 'food'),
      ammount: Joi.number().integer().min(1).required(),
      note: Joi.string().trim(),
    });
    const body = schemaBody.validate(req.body);
    if (body.error) return res.status(400).json({ status: 'error', data: null, message: body.error.message });

    const userId = req.user.id;
    let [, plans] = await query('SELECT id FROM plan WHERE date = ? AND user_id = ?', [value.date, userId]);
    let planId = plans?.length ? plans[0].id : null;
    if (!planId) {
      [, plans] = await query('INSERT INTO plan (user_id, date) VALUES (?, ?)', [userId, value.date]);
      planId = plans.insertId;
    }
    let [err, plan] = await query('INSERT INTO meal_plan (plan_id, category, type) VALUES (?, ?, ?)', [planId, body.value.category, body.value.type]);
    if (err) throw err;
    const mealPlanId = plan.insertId;

    [err, plan] = await query(`INSERT INTO ${body.value.type}_plan (${body.value.type}_id, meal_id, ammount, note) VALUES (?, ?, ?, ?)`, [body.value.id, mealPlanId, body.value.ammount, body.value.note]);
    if (err) throw err;

    return res.json({ status: 'success', data: body.value, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editMealPlan = async (req, res) => {
  try {
    const schema = Joi.object({
      planId: Joi.number().integer().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const userId = req.user.id;
    const [, plans] = await query('SELECT plan.id FROM plan JOIN meal_plan ON (meal_plan.plan_id = plan.id) WHERE plan.user_id = ? AND meal_plan.id = ?', [userId, value.planId]);
    if (!plans?.length) return res.status(404).json({ status: 'error', data: null, message: 'Plan not found' });

    const schemaBody = Joi.object({
      id: Joi.number().integer().required(),
      category: Joi.string().valid('breakfast', 'lunch', 'dinner', 'snack'),
      type: Joi.string().valid('recipe', 'food'),
      ammount: Joi.number().integer().min(1).required(),
      note: Joi.string().trim(),
    });
    const body = schemaBody.validate(req.body);
    if (body.error) return res.status(400).json({ status: 'error', data: null, message: body.error.message });

    const {
      category, type, ammount, note, id,
    } = body.value;
    let [err] = await query('UPDATE meal_plan SET category = ?, type = ? WHERE id = ?', [category, type, value.planId]);
    if (err) throw err;
    await query(`DELETE FROM ${type === 'food' ? 'recipe' : type}_plan WHERE meal_id = ?`, [value.planId]);
    [err] = await query(`
      INSERT INTO ${type}_plan (${type}_id, meal_id, ammount, note) VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY
      UPDATE ${type}_id = ?, ammount = ?, note = ?
    `, [id, value.planId, ammount, note, id, ammount, note]);
    if (err) throw err;

    return res.json({ status: 'success', data: body, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const deleteMealPlan = async (req, res) => {
  try {
    const schema = Joi.object({
      planId: Joi.number().integer().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const userId = req.user.id;
    const [, plans] = await query('SELECT plan.id FROM plan JOIN meal_plan ON (meal_plan.plan_id = plan.id) WHERE plan.user_id = ? AND meal_plan.id = ?', [userId, value.planId]);
    if (!plans?.length) return res.status(404).json({ status: 'error', data: null, message: 'Plan not found' });

    const [, rows] = await query('DELETE FROM meal_plan WHERE id = ?', [value.planId]);
    if (!rows.affectedRows) return res.status(400).json({ status: 'error', data: null, message: 'Delete plan failed' });

    return res.json({ status: 'succes', data: null, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const addActivityPlan = async (req, res) => {
  try {
    const schemaQuery = Joi.object({
      date: Joi.string().isoDate().required(),
    });
    const { value, error } = schemaQuery.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const schemaBody = Joi.object({
      id: Joi.number().integer().required(),
      duration: Joi.number().integer().required(),
      time: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
      note: Joi.string().trim(),
    });
    const body = schemaBody.validate(req.body);
    if (body.error) return res.status(400).json({ status: 'error', data: null, message: body.error.message });

    const userId = req.user.id;
    let [, plans] = await query('SELECT id FROM plan WHERE date = ? AND user_id = ?', [value.date, userId]);
    let planId = plans?.length ? plans[0].id : null;
    if (!planId) {
      [, plans] = await query('INSERT INTO plan (user_id, date) VALUES (?, ?)', [userId, value.date]);
      planId = plans.insertId;
    }

    const [err] = await query('INSERT INTO activity_plan (activity_id, plan_id, duration, time, note) VALUES (?, ?, ?, ?, ?)', [body.value.id, planId, body.value.duration, body.value.time, body.value.note]);
    if (err?.code === 'ER_DUP_ENTRY') return res.status(400).json({ status: 'error', data: null, message: 'Cannot add activities at the same time' });
    if (err) return res.status(400).json({ status: 'error', data: null, message: 'Add activity failed' });

    return res.json({ status: 'success', data: body.value, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editActivityPlan = async (req, res) => {
  try {
    const schema = Joi.object({
      planId: Joi.number().integer().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const userId = req.user.id;
    const [, plans] = await query('SELECT plan.id FROM plan JOIN activity_plan ON (activity_plan.plan_id = plan.id) WHERE plan.user_id = ? AND activity_plan.id = ?', [userId, value.planId]);
    if (!plans?.length) return res.status(404).json({ status: 'error', data: null, message: 'Plan not found' });

    const schemaBody = Joi.object({
      id: Joi.number().integer().required(),
      duration: Joi.number().integer().required(),
      time: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
      note: Joi.string().trim(),
    });
    const body = schemaBody.validate(req.body);
    if (body.error) return res.status(400).json({ status: 'error', data: null, message: body.error.message });

    const {
      id, duration, time, note,
    } = body.value;
    const [, rows] = await query('UPDATE activity_plan SET activity_id = ?, plan_id = ?, duration = ?, note = ?, time = ?', [id, value.planId, duration, note, time]);
    if (!rows.affectedRows) return res.status(400).json({ status: 'error', data: null, message: 'Update plan failed' });

    return res.json({ status: 'success', data: body.value, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const deleteActivityPlan = async (req, res) => {
  try {
    const schema = Joi.object({
      planId: Joi.number().integer().required(),
    });
    const { value, error } = schema.validate(req.params);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const userId = req.user.id;
    const [, plans] = await query('SELECT plan.id FROM plan JOIN activity_plan ON (activity_plan.plan_id = plan.id) WHERE plan.user_id = ? AND activity_plan.id = ?', [userId, value.planId]);
    if (!plans?.length) return res.status(404).json({ status: 'error', data: null, message: 'Plan not found' });

    const [, rows] = await query('DELETE FROM activity_plan WHERE id = ?', [value.planId]);
    if (!rows.affectedRows) return res.status(400).json({ status: 'error', data: null, message: 'Delete plan failed' });

    return res.json({ status: 'succes', data: null, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editDrinkPlan = async (req, res) => {
  try {
    const schemaQuery = Joi.object({
      date: Joi.string().isoDate().required(),
    });
    const { value, error } = schemaQuery.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const schemaBody = Joi.object({
      glass: Joi.number().integer().min(1).required(),
    });
    const body = schemaBody.validate(req.body);
    if (body.error) return res.status(400).json({ status: 'error', data: null, message: body.error.message });

    const userId = req.user.id;
    let [, plans] = await query('SELECT id FROM plan WHERE date = ? AND user_id = ?', [value.date, userId]);
    let planId = plans?.length ? plans[0].id : null;
    if (!planId) {
      [, plans] = await query('INSERT INTO plan (user_id, date) VALUES (?, ?)', [userId, value.date]);
      planId = plans.insertId;
    }

    const [, drink] = await query(`
      INSERT INTO drink_plan (plan_id, ammount) VALUES (?, ?)
      ON DUPLICATE KEY UPDATE ammount = ?
    `, [planId, body.value.glass * 250, body.value.glass * 250]);
    if (!drink.affectedRows) return res.status(400).json({ status: 'error', data: null, message: 'Update drink plan failed' });

    return res.json({ status: 'succes', data: null, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = {
  getPlan,
  addMealPlan,
  addActivityPlan,
  editMealPlan,
  editActivityPlan,
  editDrinkPlan,
  deleteMealPlan,
  deleteActivityPlan,
};
