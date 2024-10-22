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
function App() {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if(phone){
      (async () => {
        const result = (await doRequest<IUser | null>(getUserByPhone, phone))
          .data;
        if (result) {
          localStorage.setItem("user", JSON.stringify(result));
          const newSocket = io("https://mymessengerwebsocket.serveo.net");
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
        const newSocket = io("https://mymessengerwebsocket.serveo.net");
        newSocket.emit("join", { userId: `${result.id}` });
        setSocket(newSocket);
        return () => {
          newSocket.close();
        };
      }
    })();
  }
  return (
    <Routes>
      <Route index element={<RegistrationPage onEnter={handleEnter}/>}></Route>
      <Route path="/contacts" element={<ContactPage />}></Route>
      <Route path="/chats" element={<ChatsPage socket={socket} />}></Route>
      <Route
        path="/chatRoom/:userId"
        element={<ChatRoom socket={socket}/>}
      ></Route>
      <Route path="/more" element={<MorePage />}></Route>
      <Route path="/profile/:userId" element={<ProfilePage />}></Route>
    </Routes>
  );
}

export default App;
