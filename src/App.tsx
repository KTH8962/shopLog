import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
//import styles from "./App.module.scss"
import Header from "@components/header/Header"
import MainPage from "@pages/MainPage"
import MyPage from "@pages/MyPage"
import Login from "@pages/Login"
import Join from "@pages/Join"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  )
}

export default App
