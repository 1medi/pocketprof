import styles from "./Navbar.module.css"
import Oscar from "@/Components/Buttons/Oscar"
import Link from "next/link"
import Home from "@/public/img/home-icon-silhouette.png"
import Image from "next/image"
import Learn from "@/public/img/learn.png"
import Profile from "@/public/img/navuser.png"
import Search from "@/public/img/search.png"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <ul className={styles.navOptions}>
          <li className={styles.navLink}>
            <Link href={'/Home'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Home}
              width={50}
              height={50}
              />
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href={'/NewSubject'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Learn}
              width={50}
              height={50}
              />
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href={'/Settings'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Profile}
              width={50}
              height={50}
              />
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href={'/QuizPage'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Search}
              width={50}
              height={50}
              />

            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
