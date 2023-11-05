const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Food = db.define('Food', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
  energy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  protein: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  carbs: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'food',
  timestamps: false,
});

module.exports = Food;
