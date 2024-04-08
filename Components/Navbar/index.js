import styles from "./Navbar.module.css"
import Oscar from "@/Components/Buttons/Oscar"
import Link from "next/link"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ul className={styles.navOptions}>
            <li className={styles.navLink}>
            <Link href={'/Components'} className={styles.navText}>Components </Link>
            </li>
            <li className={styles.navLink}>
            <Link href={'/LandingPage'} className={styles.navText}>Landing Page </Link>
            </li>
            <li className={styles.navLink}>
            <Link href={'/Profile'} className={styles.navText}>Profile </Link>
            </li>
            <li className={styles.navLink}>
            <Link href={'/QuizPage'} className={styles.navText}>Quiz</Link>
            </li>
            <li className={styles.navLink}>
            <Link href={'/Settings'} className={styles.navText}>Settings</Link>
            </li>
            <li className={styles.navLink}>
            <Link href={'/Subjects'} className={styles.navText}>Subjects</Link>
            </li>
          </ul>

        </div>
    </nav>
  )
}
