const express = require('express');
const { authToken, adminRoute } = require('../middlewares/auth.middleware');
const {
  getAllRecipe, getRecipeDetail, deleteRecipe, addRecipe, editRecipe,
} = require('../controllers/recipe.controller');
const upload = require('../middlewares/multer.middleware');

const recipe = express.Router();

recipe.get('', getAllRecipe);
recipe.get('/:id', getRecipeDetail);
recipe.post('', authToken, adminRoute, upload.single('photo'), addRecipe);
recipe.put('/:id', authToken, adminRoute, upload.single('photo'), editRecipe);
recipe.delete('/:id', authToken, adminRoute, deleteRecipe);

module.exports = recipe;
