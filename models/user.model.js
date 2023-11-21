const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Profile = require('./profile.model');

const User = db.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
  registered_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW(),
  },
}, {
  timestamps: false,
});

User.hasOne(Profile, {
  foreignKey: 'id',
});
Profile.belongsTo(User, {
  foreignKey: 'id',
});

module.exports = User;
