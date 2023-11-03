import { DataTypes, Op, col, fn, where } from "sequelize"
import db from './database.js'
import pangan from './pangan.json' assert {type: "json"}

const Food = db.define('Food', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  energy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  protein: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fat: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  carbs: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
}, {
  tableName: 'food',
  timestamps: false,
})



async function addPangan() {
  await db.sync()
  // pangan.forEach(food => {
  //   const { name, category, type, energy, protein, fat, carbs } = food
  //   Food.create({ name, category, type, energy, protein, fat, carbs })
  // })
  const { rows, count } = await Food.findAndCountAll({
    limit: 10,
    offset: 10,
    where: {
      name: {
        [Op.and]: [
          where(fn('LOWER', col('name')), 'LIKE', '%ay%')
        ]
      }
    },
    raw: true
  })
  console.log(rows, count)
}
export default addPangan