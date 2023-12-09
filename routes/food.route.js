const express = require('express');
const {
  getFoods, editFood, deleteFood, addFood,
} = require('../controllers/food.controller');

const food = express.Router();

food.get('', getFoods);
food.post('', addFood);
food.put('/:id', editFood);
food.delete('/:id', deleteFood);

module.exports = food;
