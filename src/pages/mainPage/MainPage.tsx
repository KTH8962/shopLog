import styles from "./MainPage.module.scss"

function MainPage() {
  return (
    <div className={`${styles.flexTable} ${styles.historyTable}`}>
      <div className={styles.thead}>
        <div className={styles.tr}>
          <div className={styles.th}>번호</div>
          <div className={styles.th}>제목</div>
          <div className={styles.th}>내용</div>
          <div className={styles.th}>날짜</div>
        </div>
      </div>
      <div className={styles.tbody}>
        <div className={styles.tr}>
          <div className={styles.td}>1</div>
          <div className={styles.td}>제목</div>
          <div className={styles.td}>내용</div>
          <div className={styles.td}>2024-03-05</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
