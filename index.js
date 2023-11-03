import 'dotenv/config.js';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import router from './routes/index.js';
import db from './config/database.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('public'));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err)) 

io.on('connection', (socket) => {
  console.log('a user connected')
})

httpServer.listen(process.env.PORT || 5000, () => console.log('Server up and running...'));