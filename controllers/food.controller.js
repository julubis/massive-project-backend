const {
  Op, col, fn, where,
} = require('sequelize');
const Joi = require('joi');
const Food = require('../models/food.model');

const getAllFood = async (req, res) => {
  try {
    const { name, type, category } = req.query;

    const schema = Joi.object({
      name: Joi.string(),
      type: Joi.string().valid('mentah', 'olahan'),
      category: Joi.string(),
      page: Joi.number().integer().min(1).default(1),
      pageSize: Joi.number().integer().min(1).default(10),
    });
    const { value, error } = schema.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const query = {
      limit: value.pageSize,
      offset: (value.page - 1) * value.pageSize,
      raw: true,
      where: {},
    };

    if (name) {
      query.where.name = {
        [Op.and]: [where(fn('LOWER', col('name')), 'LIKE', `%${name.toLowerCase().trim()}%`)],
      };
    }
    if (category) query.where.category = category;
    if (type) query.where.type = type;

    const { rows, count } = await Food.findAndCountAll(query);

    if (count === 0) return res.status(404).json({ status: 'error', data: null, message: 'food not found' });

    return res.json({
      status: 'success',
      data: {
        foods: rows,
        total: count,
        page: value.page,
        totalPage: Math.ceil(count / value.pageSize),
      },
      message: null,
    });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = getAllFood;
