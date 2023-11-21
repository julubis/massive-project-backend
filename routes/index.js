const express = require('express');
const getAllFood = require('../controllers/food.controller');
const { login, register } = require('../controllers/auth.controller');
const { getUserInfo } = require('../controllers/user.controller');
const authToken = require('../middleware/authToken');
const getNews = require('../controllers/news.controller');

const router = express.Router();

router.get('/foods', getAllFood);
router.get('/news', getNews);
router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/users/info', authToken, getUserInfo);

module.exports = router;
