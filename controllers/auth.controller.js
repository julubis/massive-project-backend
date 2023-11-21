/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/user.model');
const Profile = require('../models/profile.model');

const login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(15).required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const { email, password } = value;
    const user = await User.findOne({ where: { email, password }, raw: true });
    if (!user) return res.status(401).json({ status: 'error', data: null, message: 'email or password wrong' });

    const token = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.name,
    }, process.env.TOKEN_SECRET);

    return res.json({ status: 'success', data: { token }, message: 'login success' });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const register = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(15).required(),
      gender: Joi.string().valid('male', 'female').required(),
      birthday: Joi.number().integer().required(),
      weight: Joi.number().required(),
      height: Joi.number().required(),
      activity_level: Joi.number().integer().min(1).max(5),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    value.birthday *= 1000;
    const {
      name, email, password, gender, birthday, weight, height, activity_level,
    } = value;
    console.log(birthday);
    const { id } = await User.create({ name, email, password });
    await Profile.create({
      id, gender, birthday, weight, height, activity_level,
    });

    return res.json({ status: 'success', data: null, message: 'register success' });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') return res.status(403).json({ status: 'error', data: null, message: 'user already exists' });
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { login, register };
