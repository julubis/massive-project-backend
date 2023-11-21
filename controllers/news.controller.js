const Joi = require('joi');
const similarity = require('../utils/similarity');

const newsList = [];

const getNewsList = async () => {
  try {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/suara-news/health');
    const responseJson = await response.json();
    responseJson?.data.forEach((news) => {
      newsList.push(news);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const getNews = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().default(''),
    page: Joi.number().min(1).default(1),
    pageSize: Joi.number().min(1).default(8),
  });

  const { value, error } = schema.validate(req.query);
  if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });
  const newsFilter = newsList.filter((news) => news
    .title
    .toLowerCase()
    .includes(value.title.toLowerCase())
    || similarity(news.title, value.title));

  return res.json({
    status: 'success',
    data: {
      news: newsFilter.slice((value.page - 1) * value.pageSize, value.pageSize),
      total: newsFilter.length,
      page: value.page,
      totalPage: Math.ceil(newsFilter.length / value.pageSize),
    },
    message: null,
  });
};

getNewsList();

module.exports = getNews;
