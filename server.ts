import express from "express";
import http from "http";
import { Server } from "socket.io";
import { getMessaging, TokenMessage } from "firebase-admin/messaging";
import { cert, initializeApp } from "firebase-admin/app";
import serviceAcc from "./cfu-messenger-firebase-adminsdk-67zlb-bc62043bae.json";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

initializeApp({
  credential: cert({
    privateKey: serviceAcc.private_key,
    projectId: serviceAcc.project_id,
    clientEmail: serviceAcc.client_email,
  }),
});

const MessegingModule = getMessaging();

console.log(MessegingModule);

const deviceTokens: Record<string, string> = {};

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("join", (data) => {
    socket.join(data.userId);
    console.log(`User loged in. User id is ${data.userId}`);
  });

  socket.on("registerDevice", (data) => {
    const { token, userId } = data;
    if (token) {
      deviceTokens[userId] = token; // Сохранение токена по ID сокета
      console.log("Токен устройства зарегистрирован:", token);
      console.log(deviceTokens);
    }
  });

  socket.on("joinChatRoom", (chat_id) => {
    socket.join(chat_id + "chat");
  });

  socket.on("sendNotification", (message: string) => {
    console.log(12);
    // Отправка уведомления всем зарегистрированным устройствам
    for (const tokenString of Object.values(deviceTokens)) {
      const payload: TokenMessage = {
        notification: {
          title: "Новое сообщение",
          body: message,
        },
        token: tokenString,
      };
      MessegingModule.send(payload)
        .then((response) => {
          console.log("Уведомление отправлено:", response);
        })
        .catch((error) => {
          console.log("Ошибка при отправке уведомления:", error);
        });
    }
  });

  socket.on("leaveChatRoom", (chat_id) => {
    socket.leave(chat_id + "chat");
  });

  socket.on("message", (data) => {
    io.in(data.chat_id).emit("messageResponse", data.message);
    socket.emit("sendNotification", data.message);
    console.log(data);
  });

  socket.on("addContact", (data) => {
    io.in(data.reseverId).emit("addContactResponse", data);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
