import styles from "./Circles.module.css"

export default function Circles({
  title,
  fontSize
}) {
  return (
    <>
      <div className={styles.containerOfCircles}>
        <div className={`${styles.background__circle}`}></div>
        <div className={`${styles.background__circle2}`}></div>
        <div className={styles.heading__container}>
          <h1 style={{ fontSize: fontSize }} className={styles.heading}>
            {title}
          </h1>
        </div>
      </div>
    </>
  )
}
