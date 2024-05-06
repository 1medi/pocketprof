import styles from "./GoalCheck.module.css"

export default function GoalCheck({
    description,
    name
}) {
    return(
        <>
        <div className={styles.goalContainer}>
        <input className={styles.checkbox} type="checkbox" id="checkbox" name={name} value="Goal"/>
        <label className={styles.label} for="Goal">{description}</label>
        </div>
        </>
    )
}