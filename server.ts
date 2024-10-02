import express from "express";
import http from "http";
import { Server } from "socket.io";
import { IChat, IMessage } from "src/interfaces/interfaces";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("join", (data) => {
    socket.join(data.userId);
    console.log(`User loged in. User id is ${data.userId}`);
    console.log(socket.rooms);
  });

  socket.on("joinChatRoom", (chat_id) => {
    socket.join(chat_id + "chat");
    console.log(socket.rooms, 12);
  });

  socket.on("sendNotification", (chatData: IChat, messageData: IMessage) => {
    chatData.user_ids.map((item) => {
      io.in(item).emit("notificationResponse", messageData);
    });
  });

  socket.on("leaveChatRoom", (chat_id) => {
    console.log(chat_id);
    socket.leave(chat_id + "chat");
    console.log(socket.rooms);
  });

  socket.on("message", (data) => {
    io.in(data.chat_id).emit("messageResponse", data.message);
  });

  socket.on("addContact", (data) => {
    io.in(data.reseverId).emit("addContactResponse", data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
