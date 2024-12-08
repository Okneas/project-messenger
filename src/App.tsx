import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ContactPage } from "./pages/ContactsPage/ContactsPage";
import { ChatsPage } from "./pages/ChatsPage/ChatsPage";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ChatRoom } from "./pages/ChatRoom/ChatRoom";
import { MorePage } from "./pages/MorePage/MorePage";
import doRequest from "./hooks/doRequest";
import { IUser } from "./interfaces/interfaces";
import { getUserByPhone } from "./api/getUserByPhone";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PushNotifications } from "@capacitor/push-notifications";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [registered, setRegistired] = useState("");
  const [tokenNot, setTokenNot] = useState("");
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    socket?.emit('registerDevice', { token: tokenNot, userId: user?.id });

  }, [tokenNot, socket])

  useEffect(() => {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        // Подписка на уведомления
        PushNotifications.register();
      } else {
        // Уведомление о том, что разрешение не было предоставлено
        console.log("Push notification permission not granted");
      }
    });

    PushNotifications.addListener("registration", (token) => {
      setTokenNot(token.value);
      console.log("Token получен: " + token.value);
    });

    PushNotifications.addListener("registrationError", (token) => {
      console.log(token.error);
    });

    // Обработчик получения уведомления
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const handlePushNotification = (notification: any) => {
      setRegistired("Push notification received: " + notification);
      // Здесь вы можете обработать уведомление
    };

    // Подписка на события
    PushNotifications.addListener(
      "pushNotificationReceived",
      handlePushNotification
    );
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        console.log("Push notification action performed: ", notification);
        // Здесь вы можете обработать действие, например, переход к определенному экрану
      }
    );

    return () => {
      // Удаление слушателей при размонтировании компонента
      PushNotifications.removeAllListeners();
    };
  }, []);
  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (phone) {
      (async () => {
        const result = (await doRequest<IUser | null>(getUserByPhone, phone))
          .data;
        if (result) {
          setUser(result);
          localStorage.setItem("user", JSON.stringify(result));
          const newSocket = io("https://wn75z7-62-3-0-45.ru.tuna.am", {
            extraHeaders: {
              "ngrok-skip-browser-warning": "69420"
            }});
          newSocket.emit("join", { userId: `${result.id}` });
          setSocket(newSocket);
          return () => {
            newSocket.close();
          };
        }
      })();
    }
  }, []);
  const handleEnter = (phone: string) => {
    (async () => {
      const result = (await doRequest<IUser | null>(getUserByPhone, phone))
        .data;
      if (result) {
        localStorage.setItem("user", JSON.stringify(result));
        const newSocket = io("https://wn75z7-62-3-0-45.ru.tuna.am");
        newSocket.emit("join", { userId: `${result.id}` });
        setSocket(newSocket);
        return () => {
          newSocket.close();
        };
      }
    })();
  };
  return (
    <Routes>
      <Route index element={<RegistrationPage onEnter={handleEnter} />}></Route>
      <Route path="/contacts" element={<ContactPage />}></Route>
      <Route path="/chats" element={<ChatsPage socket={socket} />}></Route>
      <Route
        path="/chatRoom/:userId"
        element={<ChatRoom socket={socket} />}
      ></Route>
      <Route path="/more" element={<MorePage reg={registered} />}></Route>
      <Route path="/profile/:userId" element={<ProfilePage />}></Route>
    </Routes>
  );
}

export default App;
