/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { query } = require('../services/db.service');

const login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(15).required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const { email, password } = value;

    const [, rows] = await query(
      'SELECT id, name, email, role, password FROM user WHERE email = ?',
      [email],
    );
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'email not registered' });

    const { id, name, role } = rows[0];
    const match = await bcrypt.compare(password, rows[0].password);
    if (!match) return res.status(401).json({ status: 'error', data: null, message: 'password wrong' });

    const user = {
      id, name, email, role,
    };
    if (role === 'user') delete user.role;
    const token = jwt.sign(user, process.env.TOKEN_SECRET);

    return res.json({ status: 'success', data: { token }, message: 'login success' });
  } catch {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const register = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(15).required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const { name, email, password } = value;
    const hashPassword = await bcrypt.hash(password, 10);

    const [err] = await query(
      'INSERT INTO user(name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashPassword, 'user'],
    );
    if (err?.code === 'ER_DUP_ENTRY') return res.status(400).json({ status: 'error', data: null, error: 'email already registered' });
    if (err) return res.status(400).json({ status: 'error', data: null, error: 'register failed' });

    return res.json({ status: 'success', data: null, message: 'register success' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const changePassword = async (req, res) => {
  try {
    const schema = Joi.object({
      old_password: Joi.string().min(8).max(15).required(),
      new_password: Joi.string().min(8).max(15).required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const { old_password, new_password } = value;
    const { id } = req.user;
    const [, rows] = await query(
      'SELECT password from user WHERE id = ?',
      [id],
    );
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    const { password } = rows[0];
    const match = await bcrypt.compare(old_password, password);
    if (!match) return res.status(400).json({ status: 'error', data: null, message: 'old password wrong' });
    const hashNewPassword = await bcrypt.hash(new_password, 10);

    const [, user] = await query(
      'UPDATE user SET password = ? WHERE id = ?',
      [hashNewPassword, id],
    );

    if (!user.affectedRows) return res.status(400).json({ status: 'error', data: null, message: 'change password failed' });
    return res.json({ status: 'success', data: null, message: 'change password success' });
  } catch {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { login, register, changePassword };
