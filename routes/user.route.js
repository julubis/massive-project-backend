const express = require('express');
const { getAllUser, deleteUser } = require('../controllers/user.controller');

const user = express.Router();

user.get('', getAllUser);
user.delete('/:id', deleteUser);

module.exports = user;
