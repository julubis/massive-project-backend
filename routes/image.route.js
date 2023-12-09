const express = require('express');
const getImage = require('../controllers/image.controller');
const upload = require('../middlewares/multer.middleware');
const { postImage } = require('../controllers/recipe.controller');

const image = express.Router();

image.get('/:id', getImage);
image.post('', upload.single('photo'), postImage);

module.exports = image;
