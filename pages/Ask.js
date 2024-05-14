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
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles
          title="Ask"
          tabIndex={1}
        />
        <main className={styles.main} tabIndex={2}>
          <div className={styles.questionContainer} tabIndex={3}>
            <QuestionMark
              tip={"Click the level that best describes your skill level in this subject"}
              tabIndex={4}
            />
          </div>
          <Oscar tabIndex={5}/>
          <CourseQuestions tabIndex={6}/>
          <NavBar tabIndex={7}/>
        </main> 
      </div>
    </>
  );
}
