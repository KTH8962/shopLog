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
                <input type="text" placeholder="아이디를 입력하세요" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>비밀번호</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="password" placeholder="비밀번호를 입력하세요" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>비밀번호 확인</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>이름</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.ip_ul}>
            <div className={styles.tit_box}>이메일</div>
            <div className={styles.bot_box}>
              <div className={styles.ip_box}>
                <input type="text" />
              </div>
            </div>
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
