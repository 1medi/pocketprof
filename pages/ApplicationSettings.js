import Head from "next/head";
import styles from "@/styles/AppSettings.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import ArrowLeft from "@/Components/Shapes/Arrows/ArrowLeft";
import Link from "next/link";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";


const montserrat = Montserrat({ subsets: ['latin'] });

export default function AppSettings() {
  return (
    <>
      <Head>
        <title>App Settings</title>
        <meta name="description" content="Settings on Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Header name={"App Settings"} />
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.optionsOuter}>
          <h4 className={styles.subHeading}>Accessibility</h4>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Dark Mode</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Font Options</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Color Blindness</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Language</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Narrator / Voice</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <p className={styles.description}>Privacy</p>
              <ArrowRight />
            </div>
          <div className={styles.horizontal}></div>
          </div>
          <div className={styles.optionsOuter}>
          <h4 className={styles.subHeading}>General</h4>
          <div className={styles.optionsContainer}>
            <p className={styles.description}>Get Help</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <p className={styles.description}>Rate The App</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <p className={styles.description}>Log Out</p>
            <ArrowRight />
          </div>
          </div>
          <NavBar/>
        </main>
      </div>
    </>
  );
}
