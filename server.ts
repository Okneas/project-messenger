import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}})

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join', (data) => {
    socket.join(data.userId);
    console.log(`User loged in. User id is ${data.userId}`);
  });

  socket.on('message', (data) => {
    io.in(data.userId).emit('messageResponse', data);
    console.log(socket.rooms);
  });
  socket.on('sendByClick', (data) => {
    socket.broadcast.to(data.distUserId.chatsId[0]).emit('messageResponse', data.message);
  })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});