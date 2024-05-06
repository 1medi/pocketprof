import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/SuccessDashboard/Success.module.css";
import { Montserrat } from "next/font/google";
import Circles from "@/Components/Shapes/Circles";
import NavBar from "@/Components/Navbar";
import HorizontalChart from "@/Components/horizontalChart";
import PieChart from "@/Components/doughnutChart";
import ArrowLeft from "@/Components/Shapes/Arrows/ArrowLeft";
import Link from "next/link";
import GoalCheck from "@/Components/GoalStuff/GoalCheck";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Goal Tracking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title={"Goal Tracking"} />
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.backContainer}>
          <Link href={"Settings"}>
          <ArrowLeft/>
        </Link>
          </div>
          <div className={styles.chartContainer}>
          <HorizontalChart />
          </div>

          <h4>Active Goals</h4>
          <ul>
            <GoalCheck
              description={"HUEHUEUEUEUEUEUEEU"}
            />
            <GoalCheck
              description={"HUEHUEUEUEUEUEUEEU"}
            />
            <GoalCheck
              description={"HUEHUEUEUEUEUEUEEU"}
            />
            <GoalCheck
              description={"HUEHUEUEUEUEUEUEEU"}
            />
            <GoalCheck
              description={"HUEHUEUEUEUEUEUEEU"}
            />
          </ul>
        </main>
        <NavBar />
      </div>

    </>
  );
}
