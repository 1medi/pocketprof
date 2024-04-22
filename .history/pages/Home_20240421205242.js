import Head from "next/head";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Sign in or sign up" />
        <meta name="viewport" content="width=430" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Glad to Have you with us</h1>
          <div></div>
          <div className={styles.descriptionContainer}>
            <h3>Let's explore together!</h3>
          </div>
          <Link href='/quiz/page' className={styles.buttonContainer}>
            <Button3 name={"Press To Start"} />
          </Link>
        </div>
        <div></div>
      </main>
      <NavBar />
      </div>

    </>
  );
}