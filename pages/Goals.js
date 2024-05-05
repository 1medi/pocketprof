import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar"
import Button3 from "@/Components/Buttons/Button3";
import Images from "@/Components/images";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";

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
        <main className={`${styles.main} ${montserrat.className}`}>
          <Header name="Ask" />
          <Oscar />
          <div className={styles.textContainer}>
            <h1 className={styles.header}>Huzzah!</h1>
            <p className={styles.body}>Your subject and goals have been added to your account!</p>
            <hr className={styles.lineBreak} />
            <p className={styles.body}>You can track your goals, progress,
              and resources for this subject
              from your profile.</p>
          </div>
          <div className={styles.buttonContainer}>
          <Button3
          name={"Track"}
          />           
          </div>
          <NavBar />
        </main>
      </div>

    </>
  );
}