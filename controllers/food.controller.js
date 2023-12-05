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
      values = values.concat([name]);
    }

    const [, rows] = await query(`SELECT COUNT(*) AS total FROM food ${q ? `WHERE ${q}` : ''}`, values);
    const { total } = rows[0];
    const [err, foods] = await query(
      `SELECT id, name, type, category, energy, ROUND(protein, 2) AS protein, ROUND(fat, 2) AS fat, ROUND(carbs, 2) AS carbs 
        FROM food ${q ? `WHERE ${q}` : ''} LIMIT ?, ?`,
      values.concat([(page - 1) * pageSize, pageSize]),
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

module.exports = getFoods;
