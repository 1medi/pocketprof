import styles from "@/Components/Header/Header.module.css"
import Link from "next/link"

export default function Header({name}){
  return (
    <>
    <header className={styles.header}>
    <div class="background-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
      <h1 className={styles.headerTitle}>{name}</h1>
    </header>
    </>
  )
}