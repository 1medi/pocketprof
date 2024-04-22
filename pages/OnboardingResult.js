import Head from "next/head";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";
import Header from "@/Components/Header";
import Button3 from "@/Components/Buttons/Button3"
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Result() {
  return (
    <>
      <Head>
        <title>Best Match</title>
        <meta name="description" content="Quiz section" />
        <meta name="viewport" content="width=430" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Your best Match!</h1>
          <div></div>
          <div className={styles.descriptionContainer}>
            <h3>ARE YOU READY TO WIN</h3>
          </div>
          <Link href='/onboarding/page' className={styles.buttonContainer}>
            <Button3 name={"Start"} />
          </Link>
        </div>
        <div></div>
      </main>
      </div>

    </>
  );
}