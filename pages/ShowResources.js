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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <Circles title="Show Resources"/>
      <main className={`${styles.main} ${montserrat.className}`}>
      <div className={styles.questionContainer}>
        <QuestionMark
        tip={"Clicking on get resources will display results based on your selected skill level"}
        />
        </div>

      <div className={styles.oscarContainer}>
      <Oscar/>
      </div>
      <Prompt/>
      <NavBar/>
      </main> 
      </div>

    </>
  );
}
