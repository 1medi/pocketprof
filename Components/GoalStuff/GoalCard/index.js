import Image from "next/image"
import Plus from "@/public/img/add.png"
import PlusHover from "@/public/img/addHover.png" 
import styles from "./GoalCard.module.css"
import Modal from "react-modal";
import { useState } from "react";
import Oscar from "@/Components/Oscar";
import { useRouter } from "next/router";

export default function goalCard({
    number,
    description
}) {
    const [isOpen, setIsOpen] = useState(false)
    Modal.setAppElement('body');

    const router = useRouter(); // Initialize useRouter

    // Function to prefetch the hover state image
    const handleMouseEnter = () => {
        router.prefetch(PlusHover);
    };
    return (
        <>
            <div className={styles.goalCard}>
                <h3 className={styles.number}>{number}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={Plus}
                        onMouseEnter={handleMouseEnter} // Call handleMouseEnter on mouse enter
                        onClick={() => setIsOpen(true)}
                    />
                    <Image
                        className={styles.hoverImage}
                        src={PlusHover}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
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