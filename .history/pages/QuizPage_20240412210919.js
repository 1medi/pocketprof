import Head from "next/head";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";
import Header from "@/Components/Header";
import Button3 from "@/Components/Buttons/Button3"
import NavBar from "@/Components/Navbar";

export default function QuizPage() {
  return (
    <>
      <Head>
        <title>Quiz Page</title>
        <meta name="description" content="Quiz section" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name={"Banana"}/>
      <main className={`${styles.main}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Quiz App</h1>
          <div className={styles.descriptionContainer}>
            <h3>ARE YOU READY TO WIN</h3>
          </div>
          <Link href='/quiz/page' className={styles.buttonContainer}>
            <Button3 name={"Press To Start"} />
          </Link>
        </div>
      </main>
      <NavBar />
    </>
  );
}