import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/SuccessDashboard/SuccessDashboard.module.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/Components/Navbar";
import DoughnutChart from "@/Components/DoughnutChart";
import Image1 from "@/public/img/nature-4964153_1920.jpg";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
import SubjectCard from "@/Components/SubjectCard";
import { subjectsCards } from "@/data/card_data";


const montserrat = Montserrat({ subsets: ['latin'] });
export default function SuccessDashboard() {
  return (
    <>
      <Head>
        <title>Success Dashboard</title>
        <meta name="description" content="Dashboard in which you can measure your success" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title={"Success Dashboard"} tabIndex={1} />
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>
          <div className={styles.imageContainer} tabIndex={3}>
            <Image
              className={styles.image}
              src={Image1}
              width={150}
              height={150}
            />
            <div className={styles.nameContainer}>
              <h3 tabIndex={4}>Drake Williams</h3>
              <p tabIndex={5}>Beginner Student</p>
            </div>
          </div>
          <div className={styles.cardOuterContainer} tabIndex={6}>
            <div className={styles.innerContainer}>
              <div className={styles.textContainer} tabIndex={7}>
                <h5 className={styles.tracked}>Currently Tracked Subject</h5>
                <h4 className={styles.goal}>Learning Intermediate Skills on Violin</h4>
                <Link href={"/SuccessDashboard/GoalTracking"} tabIndex={8}>
                  <button className={styles.buddon}>View Your Goals</button>
                </Link>
              </div>
              <div className={styles.chartContainer} tabIndex={9}>
                <p className={styles.percent}>80%</p>
                <div className={styles.chart}>
                  <DoughnutChart tabIndex={10} />
                </div>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>Of your goals have been completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section__cards} tabIndex={11}>
            {subjectsCards.music.filter((card) => card.category === "Arts & Creative").map((card, index) => (
              <SubjectCard key={index} card={card} />
            ))}
          </div>

        </main>
        <NavBar tabIndex={12} />
      </div>

    </>
  );
}
