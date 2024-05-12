import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import Oscar from "@/Components/Oscar"
import CourseQuestions from "@/Components/CourseQuestions"
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import Circles from "@/Components/Shapes/Circles";
import QuestionMark from "@/Components/Shapes/Tooltips/QuestionMark";

export default function Ask() {

  return (
    <>
      <Head>
        <title>Ask Oscar</title>
        <meta name="description" content="This page contains AI to help assist with goal setting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}></div>
      <Circles
        title="Ask"
        />
      <main className={styles.main}>
      <div className={styles.questionContainer}>
        <QuestionMark
        tip={"Click the level that best describes you skill level in this subject"}
        />
        </div>
      <Oscar/>
      <CourseQuestions/>
      <NavBar/>
      </main> 
      </div>

    </>
  );
}
