import styles from "./FloatingOscar.module.css";
import AskOscar from "../AskOscar";
import OscarImage from "@/public/img/oscar/oscar-head.svg";
import Image from "next/image";
import { useState } from "react";
import Oscar from "../Oscar";
import Images from "@/Components/ImageGeneration";

export default function FloatingOscar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.oscarContainer} onClick={toggleModal}>
        <Image className={styles.oscarImage} src={OscarImage} width={64} height={64} />
        <p className={styles.oscarText}>Ask Oscar!</p>
      </div>
      {isOpen && (
        <div className={styles.modal}>

          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <div className={styles.animationContainer}>
              <Oscar />
            </div>

            <h1 className={styles.query}>Got a query?</h1>
            <div className={styles.askOscarContainer}>
              <AskOscar />
            </div>
            <h3 className={styles.query}>Need some inspiration?</h3>
            <Images />
          </div>
        </div>
      )}
    </>
  );
}
