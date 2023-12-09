const express = require('express');
const { getProfile, createProfile, editProfile } = require('../controllers/profile.controller');
const { authToken } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/multer.middleware');

const profile = express.Router();

profile.get('', authToken, getProfile);
profile.post('', authToken, createProfile);
profile.put('', authToken, upload.single('photo'), editProfile);

module.exports = profile;
