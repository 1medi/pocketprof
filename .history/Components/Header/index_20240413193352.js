import styles from "@/Components/Header/Header.module.css"
import Link from "next/link"

export default function Header({name}){
  return (
    <>
    <header className={styles.header}>
    <div className={styles.circles}>
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>
    </div>
      <h1 className={styles.headerTitle}>{name}</h1>
    </header>
    </>
  )
}