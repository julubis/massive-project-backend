import { DataTypes } from "sequelize"
import db from "../config/database"

const User = db.define('User', {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {tableName: 'users'})

export default User