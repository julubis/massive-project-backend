const express = require('express');
const getNews = require('../controllers/news.controller');

const news = express.Router();

news.get('', getNews);

module.exports = news;
