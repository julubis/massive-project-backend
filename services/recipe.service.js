const { update, query } = require('./db.service');

const addRecipeIngredient = (recipe_id, array) => {
  const sql = array.map(() => '(?, ?, ?, ?)').join(', ');
  return [`INSERT INTO recipe_ingredient (recipe_id, num, name, unit) VALUES ${sql}`, array.flatMap(({ name, unit }, i) => [recipe_id, i + 1, name, unit])];
};

const addRecipeDirection = (recipe_id, array) => {
  const sql = array.map(() => '(?, ?, ?)').join(', ');
  return [`INSERT INTO recipe_direction (recipe_id, step, detail) VALUES ${sql}`, array.flatMap(({ detail }, i) => [recipe_id, i + 1, detail])];
};

const addNewRecipe = ({
  name, photo, category, description, duration, serving, energy, protein, fat, carbs,
}) => ['INSERT INTO recipe (name, photo, category, description, duration, serving, energy, protein, fat, carbs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, photo, category, description, duration, serving, energy, protein, fat, carbs]];

const editRecipeById = (id, data) => {
  const [sql, values] = update(data);
  return [`UPDATE recipe SET ${sql} WHERE id = ?`, [...values, id]];
};

const editRecipeIngredient = async (id, data_array) => {
  const [, rows] = await query('SELECT COUNT(*) AS total FROM recipe_ingredient WHERE recipe_id = ?', [id]);
  const { total } = rows[0];

  data_array.forEach(async ({ name, unit }, num) => {
    if (num + 1 <= total) {
      query('UPDATE recipe_ingredient SET name = ?, unit = ? WHERE recipe_id = ? AND num = ?', [name, unit, id, num + 1]);
    } else {
      query('INSERT INTO recipe_ingredient (recipe_id, num, name, unit) VALUES (?, ?, ?, ?)', [id, num + 1, name, unit]);
    }
  });
  if (total > data_array.length) query('DELETE FROM recipe_ingredient WHERE recipe_id = ? AND num > ?', [id, data_array.length]);
};

const editRecipeDirection = async (id, data_array) => {
  const [, rows] = await query('SELECT COUNT(*) AS total FROM recipe_direction WHERE recipe_id = ?', [id]);
  const { total } = rows[0];

  data_array.forEach(async ({ detail }, step) => {
    if (step + 1 <= total) {
      query('UPDATE recipe_direction SET detail = ? WHERE recipe_id = ? AND step = ?', [detail, id, step + 1]);
    } else {
      query('INSERT INTO recipe_direction (recipe_id, step, detail) VALUES (?, ?, ?)', [id, step + 1, detail]);
    }
  });
  if (total > data_array.length) query('DELETE FROM recipe_direction WHERE recipe_id = ? AND step > ?', [id, data_array.length]);
};

module.exports = {
  addNewRecipe,
  addRecipeIngredient,
  addRecipeDirection,
  editRecipeById,
  editRecipeIngredient,
  editRecipeDirection,
};
