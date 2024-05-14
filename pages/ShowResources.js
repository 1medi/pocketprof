import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Oscar from "@/Components/Oscar"
import Prompt from "@/Components/Prompt"
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import QuestionMark from "@/Components/Shapes/Tooltips/QuestionMark";
import Circles from "@/Components/Shapes/Circles";
const montserrat = Montserrat({ subsets: ['latin'] })
export default function ShowResources() {

  return (
    <>
      <Head>
        <title>Show Resources</title>
        <meta name="description" content="Showing resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title="Show Resources" tabIndex={1}/>
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>
          <div className={styles.questionContainer} tabIndex={3}>
            <QuestionMark
              tip={"Clicking on get resources will display results based on your selected skill level"}
              tabIndex={4}
            />
          </div>
          <Oscar tabIndex={5}/>
          <div className={styles.promptContainer} tabIndex={6}>
            <Prompt tabIndex={7}/>
          </div>
          <div className={styles.padding} tabIndex={8}></div>
          <NavBar tabIndex={9}/>
        </main> 
      </div>
    </>
  );
}
