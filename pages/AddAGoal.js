import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar"
import Images from "@/Components/images";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import Circles from "@/Components/Shapes/Circles";
import GoalCard from "@/Components/GoalStuff/GoalCard";
import Button3 from "@/Components/Buttons/Button3";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {

  return (
    <>
      <Head>
        <title>Add A Goal</title>
        <meta name="description" content="Add a goal here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title={"Add A Goal"} />
        <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.oscarContainer}>
        <Oscar />
        </div>
          <h1>Here's a set of goals that Oscar recommends
          </h1>
          <div >
            <GoalCard
              number={"1."}
              description={"Learn to play three basic chords (E.G: G, C, D)"}
            />
            <hr className={styles.lineBreak} />
            <GoalCard
              number={"2."}
              description={"Practice swtiching between chords accurately"}
            />
            <hr className={styles.lineBreak} />
            <GoalCard
              number={"3."}
              description={"Master basic strumming patterns"}
            />
            <hr className={styles.lineBreak} />
            <GoalCard
              number={"4."}
              description={"Play a simple song from start to finish"}
            />
            <hr className={styles.lineBreak} />
            <GoalCard
              number={"5."}
              description={"Dedicate at least 30 minutes each day to practice"}
            />
            <hr className={styles.lineBreak} />
          </div>
          <div className={styles.buttonContainer}>
            <Link
              href={"/Goals"}
            >
              <Button3
                name="Add All"
              />
            </Link>
          </div>
          <div className={styles.goalSpacing}></div>
          <NavBar />
        </main>
      </div>

    </>
  );
}
