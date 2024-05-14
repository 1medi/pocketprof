import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/SuccessDashboard/Success.module.css";
import { Montserrat } from "next/font/google";
import Circles from "@/Components/Shapes/Circles";
import NavBar from "@/Components/Navbar";
import HorizontalChart from "@/Components/horizontalChart";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import GoalChart1 from "@/Components/GoalStuff/GoalCharts/GoalChart1";
import GoalChart2 from "@/Components/GoalStuff/GoalCharts/GoalChart2";
import GoalChart3 from "@/Components/GoalStuff/GoalCharts/GoalChart3";
import GoalChart4 from "@/Components/GoalStuff/GoalCharts/GoalChart4";
import Button3 from "@/Components/Buttons/Button3";
import ConfettiButton from "@/Components/Buttons/ConfettiButton";
const montserrat = Montserrat({ subsets: ['latin'] });

export default function GoalTracking() {
  const [goalData, setGoalData] = useState({
    goalName: "Play the guitar once a day!",
    goalDescription: "",
    goalDuration: "",
    favoriteColor: ""
  });
  const router = useRouter();
  const [goalName, setGoalName] = useState('Play the guitar once a day!');

  useEffect(() => {
    const { goalName } = router.query;
    if (goalName) {
      setGoalName(goalName);
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
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title={"Goal Tracking"} tabIndex={1} />
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>
          <div className={styles.backContainer} tabIndex={3}>
            <Link href={"Settings"} tabIndex={4}></Link>
          </div>
          <div className={styles.chartContainer} tabIndex={5}>
            <HorizontalChart tabIndex={6} />
          </div>
          <ul className={styles.jumboContainer} tabIndex={7}>
            <label tabIndex={8}>Active Goals</label>
            <li className={styles.goalContainer} tabIndex={9}>
              <div className={styles.doughnutContainer} tabIndex={10}>
                <GoalChart1 tabIndex={11} />
              </div>
              <div className={styles.goalTextContainer} tabIndex={12}>
                <p id="goalName" className={styles.goalText} tabIndex={13}>{goalName}</p>
              </div>
              <Link
                href={{ pathname: "/SuccessDashboard/GoalEditor", query: { goalName: goalData.goalName } }}
              >
                <div className={styles.buttonContainer} tabIndex={14}>
                  <Button3
                    name="Edit"
                  />
                </div>
              </Link>
            </li>
            <li className={styles.goalContainer} tabIndex={15}>
              <div className={styles.doughnutContainer} tabIndex={16}>
                <GoalChart2 tabIndex={17} />
              </div>
              <p className={styles.goalText} tabIndex={18}>Learn at LEAST 3 chords</p>
            </li>
            <li className={styles.goalContainer} tabIndex={19}>
              <div className={styles.doughnutContainer} tabIndex={20}>
                <GoalChart3 tabIndex={21} />
              </div>
              <p className={styles.goalText} tabIndex={22}>Learn More Guitar Stuff</p>
            </li>
            <li className={styles.goalContainer} tabIndex={23}>
              <div className={styles.doughnutContainer} tabIndex={24}>
                <GoalChart4 tabIndex={25} />
              </div>
              <p className={styles.goalText} tabIndex={26}>The more you learn the more you earn</p>
            </li>
          </ul>
          <ConfettiButton tabIndex={27} />
        </main>
        <NavBar tabIndex={28} />
      </div>
    </>
  );
}
