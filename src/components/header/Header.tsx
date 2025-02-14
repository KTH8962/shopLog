import { Link, NavLink, useLocation } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  const location = useLocation()
  const check = ["login", "join"]
  const classCheck = check.some((path) =>
    location.pathname.startsWith(`/${path}`)
  )
  console.log(classCheck)
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link to="/">ShopLog로고</Link>
      </h1>
      <nav className={styles.gnb}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              기록
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mypage"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              마이페이지
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              회원가입
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
