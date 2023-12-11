const express = require('express');
const {
  getPlan, addMealPlan, editMealPlan, deleteMealPlan,
  addActivityPlan, editActivityPlan, deleteActivityPlan, editDrinkPlan,
} = require('../controllers/plan.controller');
const { authToken } = require('../middlewares/auth.middleware');

const plan = express.Router();

plan.get('', authToken, getPlan);
plan.post('/meals', authToken, addMealPlan);
plan.put('/meals/:planId', authToken, editMealPlan);
plan.delete('/meals/:planId', authToken, deleteMealPlan);

plan.post('/activities', authToken, addActivityPlan);
plan.put('/activities/:planId', authToken, editActivityPlan);
plan.delete('/activities/:planId', authToken, deleteActivityPlan);

plan.put('/drink', authToken, editDrinkPlan);

module.exports = plan;
