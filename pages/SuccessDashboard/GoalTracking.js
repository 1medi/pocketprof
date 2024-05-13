import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/SuccessDashboard/Success.module.css";
import { Montserrat } from "next/font/google";
import Circles from "@/Components/Shapes/Circles";
import NavBar from "@/Components/Navbar";
import HorizontalChart from "@/Components/horizontalChart";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import GoalChart1 from "@/Components/GoalStuff/GoalCharts/GoalChart1";
import GoalChart2 from "@/Components/GoalStuff/GoalCharts/GoalChart2";
import GoalChart3 from "@/Components/GoalStuff/GoalCharts/GoalChart3";
import GoalChart4 from "@/Components/GoalStuff/GoalCharts/GoalChart4";
import Button3 from "@/Components/Buttons/Button3";
import ConfettiButton from "@/Components/Buttons/ConfettiButton";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
const [data,setData] = useState();
const [goalData, setGoalData] = useState({
  goalName: "Goal 1",
  goalDescription: "",
  goalDuration: "",
  favoriteColor: ""
});

const router = useRouter();

useEffect(() => {
  const { goalName } = router.query;
  if (goalName) {
    setGoalData(prevData => ({ ...prevData, goalName }));
  }
}, [router.query]);



  return (
    <>
      <Head>
        <title>Goal Tracking</title>
        <meta name="description" content="Track your goals here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title={"Goal Tracking"} />
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.backContainer}>
          <Link href={"Settings"}>
        </Link>
          </div>
          <div className={styles.chartContainer}>
          <HorizontalChart />
          </div>
          <ul className={styles.jumboContainer}>
            <label>Active Goals</label>
          <li className={styles.goalContainer}>
            <div className={styles.doughnutContainer}>
            <GoalChart1/>
            </div>
          <p id="goalName" className={styles.goalText}>{goalData.goalName}</p>
          <Link
           href={{ pathname: "/SuccessDashboard/GoalEditor",  query: { goalName: goalData.goalName }}}
          >
          <Button3
          name="Edit"
          />          
          </Link>
          </li>
          <li className={styles.goalContainer}>
            <div className={styles.doughnutContainer}>
            <GoalChart2/>
            </div>
          <p className={styles.goalText}>Learn at LEAST 3 chords</p>
          </li>
          <li className={styles.goalContainer}>
            <div className={styles.doughnutContainer}>
            <GoalChart3/>
            </div>
          <p className={styles.goalText}>Learn More Guitar Stuff</p>
          </li>
          <li className={styles.goalContainer}>
            <div className={styles.doughnutContainer}>
            <GoalChart4/>
            </div>
          <p className={styles.goalText}>The more you learn the more you earn</p>
          </li>
          </ul>
          <ConfettiButton/>
        </main>
        <NavBar />
      </div>

    </>
  );
}
