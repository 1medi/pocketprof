import Link from "next/link"
import styles from "./Cards.module.css"
import { useState } from "react";
import React from "react";
import Image from "next/image";




export default function Selector() {
  
    
      return (
        <div className={styles.slider}>


        <div className={styles.slide}>
          <img
            src="https://source.unsplash.com/random?landscape,mountain"
            alt=""
          />
        </div>
  
        <div className={styles.slide}>
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </div>

        <div className={styles.slide}>
          <img src="https://source.unsplash.com/random?landscape,night" alt="" />
        </div>
  
      
        <div className={styles.slide}>
          <img src="https://source.unsplash.com/random?landscape,city" alt="" />
        </div>
  
        <button className={styles.btn-next}>n</button>
        <button className={styles.btn-prev}>p</button>
      </div>
      )

}