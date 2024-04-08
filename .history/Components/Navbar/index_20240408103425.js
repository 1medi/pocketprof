import styles from "./Navbar.module.css"
import Oscar from "@/Components/Buttons/Oscar"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.buttonContainer}>
        <Oscar/>
      </div>
      <div className={styles.buttonContainer}>
        <Oscar/>
      </div>
      <div className={styles.buttonContainer}>
        <Oscar/>
      </div>
    </nav>
  )
}