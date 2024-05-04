import styles from "@/Components/Header/Header.module.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Header({name}){
  return (
    <>
    <header className={`${styles.header} ${montserrat.className}`}  >
  
      <h1 className={styles.headerTitle}>{name}</h1>
    </header>
    </>
  )
}