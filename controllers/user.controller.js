// const User = require('../models/user.model');
// const Profile = require('../models/profile.model');
const { query } = require('../services/db.service');

const getUserInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const [, rows] = await query(
      'SELECT * FROM user WHERE id = ?',
      [id],
    );
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    return res.json({ status: 'success', data: rows[0], message: null });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

// const editProfile = async (req, res) => {

// };

// const createProfile = async (req, res) => {
// const schema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(8).max(15).required(),
//   gender: Joi.string().valid('male', 'female').required(),
//   birthday: Joi.number().integer().required(),
//   weight: Joi.number().required(),
//   height: Joi.number().required(),
//   activity_level: Joi.number().integer().min(1).max(5),
// });
// };

module.exports = { getUserInfo };
