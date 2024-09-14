import { Route, Routes} from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"
import { ContactPage } from "./pages/ContactsPage/ContactsPage"
import { ChatsPage } from "./pages/ChatsPage/ChatsPage"

function App() {
  return (
    <Routes>
      <Route index element={<RegistrationPage />}></Route>
      <Route path="/contacts" element={<ContactPage/>}></Route>
      <Route path="/chats" element={<ChatsPage/>}></Route>
    </Routes>
  )
}

export default App
