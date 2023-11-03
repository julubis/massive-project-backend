import { Op, col, fn, where } from "sequelize"
import Joi from 'joi'
import Food from '../models/food.js'

const getAllFood = async (req, res) => {
  try {
    let { name, type, category } = req.query

    const schema = Joi.object({
      name: Joi.string(),
      type: Joi.string().valid('mentah', 'olahan'),
      category: Joi.string(),
      page: Joi.number().integer().min(1).default(1),
      pageSize: Joi.number().integer().min(1).default(10)
    })
    const { value, error } = schema.validate(req.query)
    if (error) return res.status(400).json({ code: 400, data: null, error: error.message })

    const query = {
      limit: value.pageSize, 
      offset: (value.page - 1) * value.pageSize, 
      raw: true, 
      where: {}
    }

    if (name) query.where.name = {
      [Op.and]: [where(fn('LOWER', col('name')), 'LIKE', `%${name.toLowerCase().trim()}%`)]
    }
    if (category) query.where.category = category
    if (type) query.where.type = type
  
    const { rows, count } = await Food.findAndCountAll(query)

    if (count === 0) return res.status(404).json({ code: 404, data: null, error: "food not found" })

    res.json({
      code: 200,
      data: {
        foods: rows,
        total: count,
        page: value.page,
        totalPage: Math.ceil(count / value.pageSize)
      },
      error: null
    })
  } catch(e) {
    console.error(e)
    res.status(500).json({ code: 500, data: null, error: 'server error' })
  }
}

export default getAllFood