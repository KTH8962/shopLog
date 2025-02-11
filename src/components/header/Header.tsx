import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link to="/">ShopLog로고</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">기록</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">마이페이지</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
