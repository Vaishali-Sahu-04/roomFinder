import Body from "./components/Body"
import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"
import RoomPage from "./pages/RoomPage"
import SignUpPage from "./pages/SignUpPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UploadRoom from "./pages/UploadRoom"
import FullGallery from "./components/FullGallary"
import MyRooms from "./pages/MyRooms"

function App() {

  return (
    <>
      <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />
                <Route path="/upload-room" element={<UploadRoom />} />
                <Route path="/full-gallery" element={<FullGallery/>} />
                <Route path="/my-rooms" element={<MyRooms/>} />
            </Routes>
      </Router>
    </>
  )
}

export default App
