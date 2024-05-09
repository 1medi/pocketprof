import styles from "./Navbar.module.css"
import Link from "next/link"
import Home2 from "@/public/img/navbar_icons/HOME2.svg"
import Image from "next/image"
import Profile from "@/public/img/navbar_icons/PROFILE.svg"
import Quiz from "@/public/img/navbar_icons/QUIZ.svg"

export default function NavBar({style}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer} style={style}>
        <ul className={styles.navOptions}>
          <li className={styles.navLink} style={style}>
            <Link href={'/Account'} className={styles.navText} style={style}>
              <Image
              className={styles.image}
              src={Profile}
              width={45}
              height={45}
              />
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href={'/NewSubject'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Home2}
              width={100}
              height={80}
              />
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href={'/QuizPage'} className={styles.navText}>
              <Image
              className={styles.image}
              src={Quiz}
              width={65}
              height={65}
              />

            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
