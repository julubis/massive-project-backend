const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('member', 'instructor'),
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  activity_level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  registered_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'user',
  timestamps: false,
});

module.exports = User;
