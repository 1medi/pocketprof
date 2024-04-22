import Head from "next/head";
import styles from "@/styles/Onboarding.module.css";
import Link from "next/link";
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google";
import Button3 from "@/Components/Buttons/Button3";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Sign in or sign up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.container}>
        <Image
          priority
          src="/img/oscar/oscar-main.svg"
          width="300"
          height="300"
          alt="oscar"
          className={styles.oscar}
        />
          <div className={styles.titleBox}><h1 className={styles.title}>Glad to <br/>Have you with us</h1></div>
          <div className={styles.descriptionContainer}>
            <h3>Let's explore together!</h3>
          </div>
          <div className={styles.containerContainer}>
          <Link href='/onboarding/page' className={styles.buttonContainer}>
            <Button3 name={"Start"}/>
          </Link>
          <Link href='/Home' className={styles.buttonContainer}>
          <Button3 name={"Skip"} />
          </Link>
        </div>
        </div>
      </main>
      </div>

    </>
  );
}