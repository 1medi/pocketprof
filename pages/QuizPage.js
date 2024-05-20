import Head from "next/head";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";
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
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title="Quiz" tabIndex={1} />
        <main className={`${styles.main}`} tabIndex={2}>
          <div className={styles.container} tabIndex={3}>
            <Image
              priority
              src="/img/oscar/oscar-main-smiling.svg"
              width="200"
              height="200"
              alt="oscar"
              className={styles.oscar}
              tabIndex={4}
            />
            <div className={styles.descriptionContainer} tabIndex={5}>
              <h3 className={styles.title}>ARE YOU READY TO WIN?</h3>
            </div>
            <Link href='/quiz/page' className={styles.buttonContainer} tabIndex={6}>
              <Button3 name={"Begin"} tabIndex={7} />
            </Link>
          </div>
          <div className={styles.divider} tabIndex={8}>
          </div>
          <div className={styles.onboardingContainer} tabIndex={9}>
            <p className={styles.onboardingLink} tabIndex={10}>Haven't found your interest yet? 
              <Link href={'/onboarding/page'}>
              <h3 tabIndex={11}>Find out here!</h3>
              </Link> 
            </p>
          </div>

          <div className={styles.bottom} tabIndex={12}></div>

        </main>
        <NavBar tabIndex={13} />
      </div>
    </>
  );
}
