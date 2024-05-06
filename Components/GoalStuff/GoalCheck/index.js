import styles from "./GoalCheck.module.css"
import DoughnutChart from "@/Components/doughnutChart"

export default function GoalCheck({
    description,
    name
}) {
    return(
        <>
        <div className={styles.goalContainer}>
        <label className={styles.label} for="Goal">{description}</label>
        </div>
        </>
    )
}