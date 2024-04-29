import styles from "./simpleButton.module.css"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ['latin'],
  });

export default function simpleButton({
    name
}) {
return (
    <>
    <button className={`${styles.button} ${montserrat.main}`}>
        <span className={styles.buttonSpan}>{name}</span></button>
    </>
)
}