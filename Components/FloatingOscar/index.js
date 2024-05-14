import styles from "./FloatingOscar.module.css";
import AskOscar from "../AskOscar";
import OscarImage from "@/public/img/oscar/oscar-head.svg";
import Image from "next/image";
import { useState } from "react";
import Oscar from "../Oscar";

export default function FloatingOscar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleModal}>
        <Image src={OscarImage} width={128} height={128} />
      </div>
      {isOpen && (
        <div className={styles.modal}>

          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <Oscar/>
            <AskOscar />
          </div>
        </div>
      )}
    </>
  );
}
