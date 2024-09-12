import { Route, Routes } from "react-router-dom"
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"

function App() {

  return (
    <Routes>
      <Route index element={<RegistrationPage />}></Route>
    </Routes>
  )
}

export default App
