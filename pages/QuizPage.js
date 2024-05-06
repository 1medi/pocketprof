import Head from "next/head";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";
import Header from "@/Components/Header";
import Button3 from "@/Components/Buttons/Button3"
import NavBar from "@/Components/Navbar";
import Image from "next/image";
import Circles from "@/Components/Shapes/Circles";

export default function QuizPage() {
  return (
    <>
      <Head>
        <title>Quiz Page</title>
        <meta name="description" content="Quiz section" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title="Quiz" />
        <main className={`${styles.main}`}>
          <div className={styles.container}>
            <Image
              priority
              src="/img/oscar/oscar-main-smiling.svg"
              width="200"
              height="200"
              alt="oscar"
              className={styles.oscar}
            />
            <div className={styles.descriptionContainer}>
              <h3 className={styles.title}>ARE YOU READY TO WIN?</h3>
            </div>
            <Link href='/quiz/page' className={styles.buttonContainer}>
              <Button3 name={"Press To Start"} />
            </Link>
          </div>
          <div className={styles.divider}>
          </div>
          <div className={styles.onboardingContainer}>
            <p className={styles.onboardingLink}>Looking for the  
              <Link
              href={'/'}
              >
              <h3>Onboarding Quiz?</h3>
              </Link> 
            </p>
          </div>

        </main>
        <NavBar />
      </div>

    </>
  );
}