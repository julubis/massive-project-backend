const Joi = require('joi');
const { query, where } = require('../services/db.service');

const getFoods = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim(),
      type: Joi.string().valid('raw', 'processed'),
      category: Joi.string(),
      page: Joi.number().integer().min(1).default(1),
      pageSize: Joi.number().integer().min(1).default(10),
    });
    const { value, error } = schema.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const {
      name, type, category, page, pageSize,
    } = value;

    let [q, values] = where({ category, type });
    if (name) {
      if (q) {
        q += ' AND MATCH (name) AGAINST (? IN NATURAL LANGUAGE MODE)';
      } else {
        q = 'MATCH (name) AGAINST (? IN NATURAL LANGUAGE MODE)';
      }
      values = [...values, name];
    }

    const [, rows] = await query(`SELECT COUNT(*) AS total FROM food ${q ? `WHERE ${q}` : ''}`, values);
    const { total } = rows[0];
    const [err, foods] = await query(
      `SELECT food.id, food.name, food.type, food.category AS category_id, food_category.name AS category, food.energy, ROUND(food.protein, 2) AS protein, ROUND(food.fat, 2) AS fat, ROUND(food.carbs, 2) AS carbs FROM food LEFT JOIN food_category ON (food.category = food_category.id) ${q ? `WHERE ${q}` : ''} LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`,
      values,
    );
    if (err) console.log(err);

    return res.json({
      status: 'success',
      data: {
        foods, total, page, pageSize, pageTotal: Math.ceil(total / pageSize),
      },
      message: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { getFoods };
