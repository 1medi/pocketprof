import styles from "./Circles.module.css"
import ArrowLeft from "../Arrows/ArrowLeft"

export default function Circles({
  title,
  fontSize,
  style
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.containerOfCircles}>
          <ArrowLeft />
          <div className={`${styles.background__circle}`} style={style}></div>
          <div className={`${styles.background__circle2}`}></div>
          <div className={styles.heading__container}>
            <h1 style={{ fontSize: fontSize }} className={styles.heading}>
              {title}
            </h1>
          </div>
        </div>
      </header>
    </>
  )
}
