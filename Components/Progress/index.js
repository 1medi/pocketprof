import styles from "@/Components/Progress/Progress.module.css"
import { useState } from "react";

export default function Progress() {
  const [width, setWidth] = useState(5);

  function move() {
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        setWidth((prevWidth) => prevWidth + 1)
      }
    }, 5);
  }
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.barStatus}></div>
      </div>
      <br />
      <button onClick={move}>Click Me</button>
    </>
  )
}