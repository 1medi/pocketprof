import styles from "./SubjectCard.module.css";

export default function SubjectCard({ card }) {
    return (
        <div className={styles.card__container} style={{backgroundImage: `url("${card.image}")`}}>
            <div className={styles.card__title__container}>
                <h5 className={styles.card__title}>
                    {card.title}
                </h5>
            </div>
        </div>
    );
}