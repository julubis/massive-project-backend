const express = require('express');
const { getFoods } = require('../controllers/food.controller');

const food = express.Router();

food.get('', getFoods);

module.exports = food;
