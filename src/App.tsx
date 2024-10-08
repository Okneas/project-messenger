import { Route, Routes, useLocation } from "react-router-dom";
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
function App() {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      const localUser = localStorage.getItem("user");
      const phone = localStorage.getItem("phone");
      if(phone){
        (async () => {
          const result = (await doRequest<IUser | null>(getUserByPhone, phone))
            .data;
          if (result) {
            localStorage.setItem("user", JSON.stringify(result));
          }
        })();
      }
      if (localUser) {
        const newSocket = io("http://localhost:3000");
        newSocket.emit("join", { userId: `${JSON.parse(localUser).id}` });
        setSocket(newSocket);
        setIsConnected(true);
        return () => {
          newSocket.close();
        };
      }
    }
  }, [isConnected]);
  return (
    <Routes>
      <Route index element={<RegistrationPage />}></Route>
      <Route path="/contacts" element={<ContactPage />}></Route>
      <Route path="/chats" element={<ChatsPage socket={socket} />}></Route>
      <Route
        path="/chatRoom/:userId"
        element={<ChatRoom socket={socket} />}
      ></Route>
      <Route path="/more" element={<MorePage />}></Route>
    </Routes>
  );
}

export default App;
