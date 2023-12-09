require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/main.route');
const { connect } = require('./services/db.service');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('public'));

connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database error', err));

app.listen(process.env.PORT || 5000, () => console.log('Server up and running...'));
