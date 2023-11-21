const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Profile = db.define('profile', {
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  weight: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  height: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  activity_level: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Profile;
