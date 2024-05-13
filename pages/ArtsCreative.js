import Head from "next/head";
import NavBar from "@/Components/Navbar";
import Image from "next/image";
import styles from "@/styles/NewSubject.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
import WritingCarousel from "@/Components/WritingCarousel"
import ArtCarousel from "@/Components/ArtCarousel"
import MusicCarousel from "@/Components/MusicCarousel"
import QuestionMark from "@/Components/Shapes/Tooltips/QuestionMark";

const montserrat = Montserrat({ subsets: ['latin'] })
export default function ArtsCreative() {

  
  return (
    <>
      <Head>
        <title>Arts / Creative</title>
        <meta name="description" content="Arts and Creative Subjects Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <Circles
      title="ARTS / CREATIVE"
      />
        <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.questionContainer}>
      <QuestionMark
      tabindex={1}
      tip={"CLICK A COURSE PLEASE"}
      />         
        </div>
            <div className={styles.subheading__section}>
              <div className={styles.subheading__container}>
                <h2 className={styles.subhead}>
                  Music
                </h2>
                <MusicCarousel 
                      tabindex={2}
                />
              </div>
            </div>
            <div className={styles.subheading__section}>
              <div className={styles.subheading__container}>
                <h2 className={styles.subhead}>
                  Art Design
                </h2>
                <ArtCarousel
                tabindex={3} />
              </div>
            </div>
            <div className={styles.subheading__section}>
              <div className={styles.subheading__container}>
                <h2 className={styles.subhead}>
                  Writing
                </h2>
                <WritingCarousel
                tabindex={4}
                 />
              </div>
            </div>
            <div className={styles.lmao}></div>
          <NavBar
          tabindex={5}
          />
        </main>
      </div>

    </>
  );
}