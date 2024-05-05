import Image from "next/image"
import Plus from "@/public/img/add.png"
import styles from "./GoalCard.module.css"
import Modal from "react-modal";
import { useState } from "react";
import Oscar from "@/Components/Oscar";

export default function goalCard({
    number,
    description
}) {
    const [isOpen, setIsOpen] = useState(false)
    Modal.setAppElement('body');


    return (
        <>
            <div className={styles.goalCard}>
                <h3 className={styles.number}>{number}</h3>
                <p className={styles.description}>{description}</p>
                <Image
                    onClick={() => setIsOpen(true)}
                    className={styles.plus}
                    src={Plus}
                    width={35}
                    height={35}
                />
                <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                    <div className={styles.oscarContainer}>
                        <Oscar />
                    </div>
                    <h1>Your Subject and Goals have been added to your account!</h1>
                    <h3>Go to your Profile page to see yours goals 
                        <br/> OR <br/>
                        Add More Goals!
                    </h3>
                    <div className={styles.buttonContainer}>
                    <button
                    className={styles.button}
                    onClick={() => setIsOpen(false)}
                    ariaHideApp={false}>
                    Close
                    </button>
                    <button className={styles.button}>
                    Add More!
                    </button>
                    </div>

                </Modal>
            </div>

        </>
    )
}