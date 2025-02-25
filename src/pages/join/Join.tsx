import styles from "./Join.module.scss"

function Join() {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.login}>
        <h1 className={styles.login__logo}>
          <img alt="ShopLog logo" />
        </h1>
        <div className={styles.login__contents}>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>아이디</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>비밀번호</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="password" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}></div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}></div>
            <div className={styles.bot_box}></div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}></div>
            <div className={styles.bot_box}></div>
          </div>
          <div className={styles.btn_box}>
            <button type="button">로그인</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
