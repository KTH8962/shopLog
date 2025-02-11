import { BrowserRouter as Router, Routes } from "react-router-dom"
import styles from "./App.module.scss"
import Header from "@components/header/Header"

function App() {
  return (
    <div className={styles.div}>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </div>
  )
}

export default App
