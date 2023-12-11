const express = require('express');
const auth = require('./auth.route');
const profile = require('./profile.route');
const user = require('./user.route');
const news = require('./news.route');
const image = require('./image.route');
const food = require('./food.route');
const recipe = require('./recipe.route');
const activity = require('./activity.route');
const plan = require('./plan.route');

const router = express.Router();

router.use('/auth', auth);
router.use('/profile', profile);
router.use('/users', user);
router.use('/foods', food);
router.use('/plan', plan);
router.use('/activities', activity);
router.use('/recipes', recipe);
router.use('/news', news);
router.use('/images', image);

module.exports = router;
