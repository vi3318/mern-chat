const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User');
const Message = require('./models/Message');
const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors(
  {
<<<<<<< HEAD
    origin: ['https://mern-chat-frontend-delta.vercel.app'],
=======
    origin: ['mern-chat-frontend-delta.vercel.app'],
>>>>>>> 5babe8f33d9925df3dd5124d5c2862f644429229
    methods: ['POST', 'GET'],
    credentials: true
  }
));

app.use('/users', userRoutes);
require('./connection');

const server = require('http').createServer(app);
const PORT = process.env.PORT || 5001; // Use dynamic port or fallback to 5001
const io = require('socket.io')(server, {
  cors: {
    origin: 'https://mern-chat-frontend-delta.vercel.app',
    methods: ['GET', 'POST']
  }
});

// Rest of your socket.io and server logic remains the same

server.listen(PORT, ()=> {
  console.log('listening to port', PORT);
});
