import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/quizPage.module.css";
import Link from "next/link";


export default function Quiz() {
  return (
    <>
      <Head>
        <title>Quiz Page</title>
        <meta name="description" content="Quiz section" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Quiz App</h1>
        <Link href='/quiz'>
          <button className={styles.btn}>Start Quiz</button>
        </Link>
      </div>
      </main>
    </>
  );
}
