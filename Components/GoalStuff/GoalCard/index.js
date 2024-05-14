import Image from "next/image"
import Plus from "@/public/img/add.png"
import PlusHover from "@/public/img/addHover.png"
import styles from "./GoalCard.module.css"
import Modal from "react-modal";
import { useState } from "react";
import Oscar from "@/Components/Oscar";
import { useRouter } from "next/router";
import Button3 from "@/Components/Buttons/Button3";
import Link from "next/link";

export default function goalCard({
    number,
    description
}) {
    const [isOpen, setIsOpen] = useState(false)
    Modal.setAppElement('body');

    const router = useRouter();

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
                        onMouseEnter={handleMouseEnter}
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
                        <br /> OR <br />
                        Add More Goals!
                    </h3>
                    <div className={styles.buttonContainer}>
                        <Link
                            href={"/SuccessDashboard/GoalTracking"}
                        >
                            <Button3
                                className={styles.button}
                                name={"Close"}
                                ariaHideApp={false} />
                        </Link>

                        <Button3
                            onClick={() => setIsOpen(false)}
                            name={"Add More!"}
                            className={styles.button} />

                    </div>

                </Modal>
            </div>

        </>
    )
}