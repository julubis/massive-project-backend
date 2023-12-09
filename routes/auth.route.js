const express = require('express');
const { login, register, changePassword } = require('../controllers/auth.controller');

const auth = express.Router();

auth.post('/login', login);
auth.post('/register', register);
auth.post('/change-password', changePassword);

module.exports = auth;
