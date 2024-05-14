import styles from "./SubjectCard.module.css";
import Link from "next/link";

export default function SubjectCard({ card }) {
    return (
        <Link className={styles.card__container__outer} href="/Courses">
            <button className={styles.card__container} style={{backgroundImage: `url("${card.image}")`}}>
                <div className={styles.card__title__container}>
                    <h5 className={styles.card__title}>
                        {card.title}
                    </h5>
                </div>
            </button>
        </Link>
    );
}