import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar";
import Images from "@/Components/Images";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import Circles from "@/Components/Shapes/Circles";
import GoalCard from "@/Components/GoalStuff/GoalCard";
import Button3 from "@/Components/Buttons/Button3";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ['latin'] });
export default function AddAGoal() {
  return (
    <>
      <Head>
        <title>Add A Goal</title>
        <meta name="description" content="Add a goal here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title={"Add A Goal"} tabIndex={1} />
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>
          <div className={styles.oscarContainer} tabIndex={3}>
            <Oscar tabIndex={4} />
          </div>
          <h1 tabIndex={5}>Here's a set of goals that Oscar recommends</h1>
          <div tabIndex={6}>
            <GoalCard
              number={"1."}
              description={"Learn to play three basic chords (E.G: G, C, D)"}
            />
            <hr className={styles.lineBreak} tabIndex={7} />
            <GoalCard
              number={"2."}
              description={"Practice switching between chords accurately"}
            />
            <hr className={styles.lineBreak} tabIndex={8} />
            <GoalCard
              number={"3."}
              description={"Master basic strumming patterns"}
            />
            <hr className={styles.lineBreak} tabIndex={9} />
            <GoalCard
              number={"4."}
              description={"Play a simple song from start to finish"}
            />
            <hr className={styles.lineBreak} tabIndex={10} />
            <GoalCard
              number={"5."}
              description={"Dedicate at least 30 minutes each day to practice"}
            />
            <hr className={styles.lineBreak} tabIndex={11} />
          </div>
          <div className={styles.buttonContainer} tabIndex={12}>
            <Link href={"/Goals"} tabIndex={13}>
              <Button3
                name="Add All"
              />
            </Link>
          </div>
          <div className={styles.goalSpacing} tabIndex={14}></div>
          <NavBar tabIndex={15} />
        </main>
      </div>
    </>
  );
}
