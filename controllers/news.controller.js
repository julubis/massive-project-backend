const Joi = require('joi');
const https = require('https');
const similarity = require('../utils/similarity');

const newsList = [];

https.get('https://berita-indo-api-next.vercel.app/api/suara-news/health', (res) => {
  const data = [];
  res.on('data', (chunk) => {
    data.push(chunk);
  });
  res.on('end', () => {
    const news = JSON.parse(Buffer.concat(data).toString());
    news?.data.forEach((n) => {
      newsList.push(n);
    });
  });
// eslint-disable-next-line no-console
}).on('error', (err) => console.error(err));

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

module.exports = getNews;
