const express = require('express');
const {
  getAllActivity, addActivity, editActivity, deleteActivity,
} = require('../controllers/activity.controller');
const { authToken, adminRoute } = require('../middlewares/auth.middleware');

const activity = express.Router();

activity.get('', getAllActivity);
activity.post('', authToken, adminRoute, addActivity);
activity.put('/:id', authToken, adminRoute, editActivity);
activity.delete('/:id', authToken, adminRoute, deleteActivity);

module.exports = activity;
