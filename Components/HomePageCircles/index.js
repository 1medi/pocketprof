import styles from "./HomePageCircles.module.css"
import OscarHome from "../OscarHome"

export default function HomePageCircles() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.containerOfCircles}>
          <div className={styles.background__circle}></div>
          <div className={styles.background__circle2}></div>
          <div className={styles.background__circle3}></div>
          <div className={styles.background__circle4}></div>
          <div className={styles.background__circle5}></div>
          <div className={styles.background__circle6}></div>
          <div className={styles.background__circle7}></div>
          <div className={styles.oscar}>
            <OscarHome />
          </div>
        </div>
      </header>
    </>
  )
}