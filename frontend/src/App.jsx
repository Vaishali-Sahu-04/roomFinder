import Body from "./components/Body"
import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"
import RoomPage from "./pages/RoomPage"
import SignUpPage from "./pages/SignUpPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/room" element={<RoomPage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
