import Head from "next/head";
import NavBar from "@/Components/Navbar";
import Image from "next/image";
import styles from "@/styles/NewSubject.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
import QuestionMark from "@/Components/Shapes/Tooltips/QuestionMark";
import SubjectCard from "@/Components/SubjectCard";
import { subjectsCards } from "@/data/card_data";

const montserrat = Montserrat({ subsets: ['latin'] });

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
        <Circles title="ARTS / CREATIVE" />
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.questionContainer}>
            <QuestionMark tabindex={1} tip={"Select a subject to receive learning resources from Oscar!"} />
          </div>
          <div className={styles.cards__section}>
            <div className={styles.card__section__container}>
              <div className={styles.subheading__section}>
                <div className={styles.subheading__container}>
                  <h3 className={styles.subhead}>Music</h3>
                </div>
              </div>
              <div className={styles.divider__container}>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.section__cards}>
              {subjectsCards.music.filter((card) => card.category === "Arts & Creative").map((card, index) => (
              <SubjectCard key={index} card={card} />
              ))}
              </div>
            </div>
            <div className={styles.card__section__container}>
              <div className={styles.subheading__section}>
                <div className={styles.subheading__container}>
                  <h3 className={styles.subhead}>Art Design</h3>
                </div>
              </div>
              <div className={styles.divider__container}>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.section__cards}>
              {subjectsCards.art.filter((card) => card.category === "Arts & Creative").map((card, index) => (
              <SubjectCard key={index} card={card} />
              ))}
              </div>
            </div>
            <div className={styles.card__section__container}>
              <div className={styles.subheading__section}>
                <div className={styles.subheading__container}>
                  <h3 className={styles.subhead}>Writing</h3>
                </div>
              </div>
              <div className={styles.divider__container}>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.section__cards}>
              {subjectsCards.writing.filter((card) => card.category === "Arts & Creative").map((card, index) => (
              <SubjectCard key={index} card={card} />
              ))}
              </div>
            </div>
          </div>
        </main>
        <NavBar/>
      </div>
    </>
  );
}
