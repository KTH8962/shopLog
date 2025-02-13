import styles from "./Login.module.scss"

function Login() {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.login}>
        <h1 className={styles.login__logo}>
          <img alt="ShopLog logo" />
        </h1>
        <div className={styles.login__contents}>
          <div className={styles.ip_box}>
            <input type="text" />
          </div>
          <div className={styles.ip_box}>
            <input type="password" />
          </div>
          <div className={styles.btn_box}>
            <button type="button">로그인</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
