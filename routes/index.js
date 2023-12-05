const express = require('express');
const getFoods = require('../controllers/food.controller');
const { login, register, changePassword } = require('../controllers/auth.controller');
const { getProfile, createProfile, editProfile } = require('../controllers/profile.controller');
const authToken = require('../middleware/authToken');
const upload = require('../middleware/multer.middleware');
const getNews = require('../controllers/news.controller');
const getImage = require('../controllers/image.controller');

const router = express.Router();

router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/change-password', authToken, changePassword);

router.get('/profile', authToken, getProfile);
router.post('/profile', authToken, createProfile);
router.put('/profile', authToken, upload.single('photo'), editProfile);

router.get('/foods', getFoods);

router.get('/news', getNews);

router.get('/images/:id', getImage);

module.exports = router;
