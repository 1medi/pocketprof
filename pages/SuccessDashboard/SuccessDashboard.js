import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/SuccessDashboard/SuccessDashboard.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import DoughnutChart from "@/Components/doughnutChart";
import Oscar from "@/Components/Oscar";
import Image1 from "@/public/img/nature-4964153_1920.jpg"
import Carousel from "@/Components/Carousel";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Header name={"Success Dashboard"} />
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.imageContainer}>
            <Image
              src={Image1}
              width={150}
              height={150}
            />
          </div>
          <div className={styles.cardOuterContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.textContainer}>
                <h5 className={styles.tracked}>Currently Tracked Subject</h5>
                <h4 className={styles.goal}>Learning Intermediate Skills on Violin</h4>
                <Link href={"/SuccessDashboard/GoalTracking"}>
                  <button className={styles.buddon}>View Your Goals</button>
                </Link>
              </div>
              <div className={styles.chartContainer}>
                <p className={styles.percent}>80%</p>
                <div className={styles.chart}>
                  <DoughnutChart />
                </div>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>Of your goals have been completed</p>
                </div>
              </div>
            </div>
          </div>
          <Link href={"/"}>
          <div>View More</div>
          </Link>
          <Carousel />

        </main>
        <NavBar />
      </div>

    </>
  );
}
