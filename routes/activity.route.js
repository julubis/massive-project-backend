const express = require('express');
const { getAllActivity } = require('../controllers/activity.controller');

const activity = express.Router();

activity.get('', getAllActivity);

module.exports = activity;
