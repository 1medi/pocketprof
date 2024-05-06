import styles from "./Button3.module.css"
import React from "react"

export default function Button3({ name, onClick, tabIndex}) {
  return (
    <button className={styles.button} onClick={onClick} tabIndex={tabIndex}>
      {name}
    </button>
  );
};
