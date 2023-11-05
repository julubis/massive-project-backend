/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const router = require('./routes/index');
const db = require('./config/database');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('public'));

db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Failed to sync database:', err));

// eslint-disable-next-line no-unused-vars
io.on('connection', (socket) => {
  console.log('a user connected');
});

httpServer.listen(process.env.PORT || 5000, () => console.log('Server up and running...'));
