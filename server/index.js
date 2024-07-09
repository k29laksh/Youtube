import express from 'express';
import dotenv from 'dotenv';
import { dbconnect } from './db/dbconnect.js';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import voipRoutes from './routes/voipRoutes.js';

dotenv.config();
dbconnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use('/uploads', express.static(path.join('uploads')));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/user', userRoutes);
app.use('/video', videoRoutes);
app.use('/comments', commentRoutes);
app.use('/voip', voipRoutes);

const port = process.env.PORT || 5500;

const server = app.listen(port, () => console.log(`Your app run on http://localhost:${port}`));

// Socket.io integration for signaling
import { Server } from 'socket.io';
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('signal', (data) => {
    io.to(data.to).emit('signal', data.signal);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
