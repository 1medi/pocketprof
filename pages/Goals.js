import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar"
import Button3 from "@/Components/Buttons/Button3";
import Images from "@/Components/Images";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
const montserrat = Montserrat({ subsets: ['latin'] })
export default function Goals() {

  return (
    <>
      <Head>
        <title>Goals</title>
        <meta name="description" content="Displays goal adding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title="Ask" tabIndex={1} />
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>

          <Oscar tabIndex={3} />
          <div className={styles.textContainer} tabIndex={4}>
            <h1 className={styles.header} tabIndex={5}>Huzzah!</h1>
            <p className={styles.body} tabIndex={6}>Your subject and goals have been added to your account!</p>
            <hr className={styles.lineBreak} tabIndex={7} />
            <p className={styles.body} tabIndex={8}>You can track your goals, progress,
              and resources for this subject
              from your profile.</p>
          </div>
          <div className={styles.buttonContainer} tabIndex={9}>
            <Link href={'/SuccessDashboard/SuccessDashboard'}>
              <Button3 name={"Track"} tabIndex={10} />
            </Link>
          </div>
          <NavBar tabIndex={11} />
        </main>
      </div>

    </>
  );
}
