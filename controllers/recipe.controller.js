const Joi = require('joi');
const fs = require('fs');
const sharp = require('sharp');
const { query, where } = require('../services/db.service');
const {
  addRecipeIngredient, addRecipeDirection, addNewRecipe,
  editRecipeById, editRecipeIngredient, editRecipeDirection,
} = require('../services/recipe.service');

const getAllRecipe = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string(),
      category: Joi.string(),
      page: Joi.number().integer().min(1).default(1),
      pageSize: Joi.number().integer().min(1).default(10),
    });
    const { value, error } = schema.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });

    const {
      name, category, page, pageSize,
    } = value;
    let [q, values] = where({ category });
    if (name) {
      if (q) {
        q += ' AND MATCH (name, description) AGAINST (? WITH QUERY EXPANSION)';
      } else {
        q = 'MATCH (name, description) AGAINST (? WITH QUERY EXPANSION)';
      }
      values = [...values, name];
    }
    const [, rows] = await query(`SELECT COUNT(*) AS total FROM recipe ${q ? `WHERE ${q}` : ''}`, values);
    const { total } = rows[0];

    const [, recipes] = await query(`SELECT id, name, category, energy, duration FROM recipe ${q ? `WHERE ${q}` : ''} LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`, values);
    return res.json({
      status: 'success',
      data: {
        recipes, total, page, pageSize, pageTotal: Math.ceil(total / pageSize),
      },
      message: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const getRecipeDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(+id)) return res.status(400).json({ status: 'error', data: null, message: 'id not a integer' });

    const [, rows] = await query('SELECT id, name, category, description, duration, serving, energy, ROUND(protein, 2) AS protein, ROUND(fat, 2) AS fat, ROUND(carbs) AS carbs FROM recipe WHERE id = ? ', [id]);
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'recipe not found' });
    const recipe = rows[0];

    const [, ingredients] = await query('SELECT name, unit FROM recipe_ingredient WHERE recipe_id = ? ORDER BY num ASC', [id]);
    const [, directions] = await query('SELECT detail FROM recipe_direction WHERE recipe_id = ? ORDER BY step ASC', [id]);
    recipe.ingredients = ingredients?.length ? ingredients : [];
    recipe.directions = directions?.length ? directions : [];

    return res.json({ status: 'success', data: recipe, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const addRecipe = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      photo: Joi.binary(),
      category: Joi.string().valid('breakfast', 'lunch', 'dinner', 'snack').required(),
      description: Joi.string().trim().required(),
      duration: Joi.number().required(),
      serving: Joi.number().required(),
      energy: Joi.number().required(),
      protein: Joi.number().required(),
      fat: Joi.number().required(),
      carbs: Joi.number().required(),
      ingredients: Joi.string().trim().required(),
      directions: Joi.string().trim().required(),
    });
    const schema1 = Joi.array().items({
      name: Joi.string().trim().required(),
      unit: Joi.string().trim().required(),
    });
    const schema2 = Joi.array().items({
      detail: Joi.string().trim().required(),
    });

    const { value, error } = schema.validate(req.body);
    const ingredient = schema1.validate(JSON.parse(value.ingredients));
    const direction = schema2.validate(JSON.parse(value.directions));

    if (error || ingredient.error || direction.error) return res.status(400).json({ status: 'error', data: null, error: error?.message || ingredient.error?.message || direction.error?.message });

    const imagePath = req.file?.path;
    if (!imagePath) return res.status(400).json({ status: 'error', data: null, error: 'Recipe image required' });
    if (req.ext !== '.webp') {
      const outputPath = imagePath.replace(/\.[^/.]+$/, '.webp');
      await sharp(imagePath).toFormat('webp', { quality: 100 }).toFile(outputPath);
      fs.unlink(imagePath, (err) => { if (err) console.error(err); });
    }
    value.photo = req.uuid;

    let [sql, values] = addNewRecipe(value);
    // eslint-disable-next-line prefer-const
    let [err, rows] = await query(sql, values);
    if (err?.code === 'ER_DUP_ENTRY') return res.status(400).json({ status: 'error', data: null, error: 'Recipe already exist' });
    if (err) throw err;

    [sql, values] = addRecipeIngredient(rows.insertId, ingredient.value);
    [err] = await query(sql, values);
    if (err) throw err;

    [sql, values] = addRecipeDirection(rows.insertId, direction.value);
    [err] = await query(sql, values);
    if (err) throw err;

    return res.json({ status: 'success', data: { ...value, ingredients: ingredient.value, directions: direction.value }, message: 'Recipe added' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(+id)) return res.status(400).json({ status: 'error', data: null, message: 'id not a integer' });

    const [, rows] = await query('SELECT id FROM recipe WHERE id = ? ', [id]);
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'recipe not found' });

    const schema = Joi.object({
      name: Joi.string().trim().required(),
      photo: Joi.binary(),
      category: Joi.string().valid('breakfast', 'lunch', 'dinner', 'snack').required(),
      description: Joi.string().trim().required(),
      duration: Joi.number().required(),
      serving: Joi.number().required(),
      energy: Joi.number().required(),
      protein: Joi.number().required(),
      fat: Joi.number().required(),
      carbs: Joi.number().required(),
      ingredients: Joi.string().trim().required(),
      directions: Joi.string().trim().required(),
    });
    const schema1 = Joi.array().items({
      name: Joi.string().trim().required(),
      unit: Joi.string().trim().required(),
    });
    const schema2 = Joi.array().items({
      detail: Joi.string().trim().required(),
    });

    const { value, error } = schema.validate(req.body);
    const ingredient = schema1.validate(JSON.parse(value.ingredients));
    const direction = schema2.validate(JSON.parse(value.directions));

    delete value.ingredients;
    delete value.directions;

    if (error || ingredient.error || direction.error) return res.status(400).json({ status: 'error', data: null, error: error?.message || ingredient.error?.message || direction.error?.message });

    const imagePath = req.file?.path;
    value.photo = undefined;
    if (imagePath) {
      if (req.ext !== '.webp') {
        const outputPath = imagePath.replace(/\.[^/.]+$/, '.webp');
        await sharp(imagePath).toFormat('webp', { quality: 100 }).toFile(outputPath);
        fs.unlink(imagePath, (err) => { if (err) console.error(err); });
      }
      value.photo = req.uuid;
    }

    const [sql, values] = editRecipeById(+id, value);
    const [err] = await query(sql, values);
    if (err) throw err;

    await editRecipeIngredient(+id, ingredient.value);
    await editRecipeDirection(+id, direction.value);

    return res.json({ status: 'success', data: {}, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const [, rows] = await query('DELETE FROM recipe WHERE id = ?', [id]);
    if (!rows?.affectedRows) return res.status(404).json({ status: 'error', data: null, message: 'recipe not found' });
    return res.json({ status: 'success', data: null, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const postImage = async (req, res) => {
  const imagePath = req.file?.path;
  if (imagePath) {
    if (req.ext !== '.webp') {
      const outputPath = imagePath.replace(/\.[^/.]+$/, '.webp');
      await sharp(imagePath).toFormat('webp', { quality: 100 }).toFile(outputPath);
      fs.unlink(imagePath, (err) => { if (err) console.error(err); });
    }
  }
  return res.json({ uuid: req.uuid });
};

module.exports = {
  getAllRecipe, getRecipeDetail, addRecipe, editRecipe, deleteRecipe, postImage,
};
