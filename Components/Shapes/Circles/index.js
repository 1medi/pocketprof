import styles from "./Circles.module.css"

export default function Circles({
  title
}) {
  return (
    <>
      <div className={`${styles.background__circle}`}></div>
      <div className={`${styles.background__circle2}`}></div>
      <div className={styles.heading__section}>
            <div className={styles.heading__container}>
              <h1 className={styles.heading}>
                {title}
              </h1>
            </div>
          </div>
    </>
  )
}