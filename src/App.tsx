import { Route, Routes, useLocation } from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"
import { ContactPage } from "./pages/ContactsPage/ContactsPage"
import { ChatsPage } from "./pages/ChatsPage/ChatsPage"
import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
function App() {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<Socket | null>(null);
  const location = useLocation();
  useEffect(() => {
    if(location.pathname !== '/'){
      const localUser = localStorage.getItem('user');
      if(localUser){
        const newSocket = io('http://localhost:3000');
        newSocket.emit('join', { userId: `${JSON.parse(localUser).id}`});
        setSocket(newSocket);
        return () => {
          newSocket.close();
        };
      }
    };
  }, [location.pathname]);
  return (
    <Routes>
      <Route index element={<RegistrationPage/>}></Route>
      <Route path="/contacts" element={<ContactPage/>}></Route>
      <Route path="/chats" element={<ChatsPage socket={socket}/>}></Route>
    </Routes>
  )
}

export default App
