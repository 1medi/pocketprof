import React from 'react';
import styles from "./ArrowRight.module.css";

export default function ArrowRight({ onClick, style }) {
  return (
    <div className={styles.arrowRight} onClick={onClick} style={style}></div>
  );
}