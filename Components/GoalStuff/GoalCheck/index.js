import styles from "./GoalCheck.module.css"

export default function GoalCheck({
    description,
}) {
    return(
        <>
        <div className={styles.goalContainer}>
        <label className={styles.label} for="Goal">{description}</label>
        </div>
        </>
    )
}