import styles from "./GoalCheck.module.css"
import DoughnutChart from "@/Components/doughnutChart"

export default function GoalCheck({
    description,
    name
}) {
    return(
        <>
        <div className={styles.goalContainer}>
            <div className={styles.goalChart}>
            <DoughnutChart/>
            </div>
        <label className={styles.label} for="Goal">{description}</label>
        </div>
        </>
    )
}