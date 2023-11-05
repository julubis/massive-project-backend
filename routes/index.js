const express = require('express');
const getAllFood = require('../controllers/food');

const router = express.Router();

router.get('/foods', getAllFood);

module.exports = router;
