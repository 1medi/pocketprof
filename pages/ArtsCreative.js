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
      <div className={styles.mobileContainer} tabIndex={0}>
        <Circles title="ARTS / CREATIVE" tabIndex={1} />
        <main className={`${styles.main} ${montserrat.className}`} tabIndex={2}>
          <div className={styles.questionContainer} tabIndex={3}>
            <QuestionMark tabindex={4} tip={"Select a subject to receive learning resources from Oscar!"} />
          </div>
          <div className={styles.cards__section} tabIndex={5}>
            <div className={styles.card__section__container}>
              <div className={styles.subheading__section}>
                <div className={styles.subheading__container}>
                  <h3 className={styles.subhead} tabIndex={6}>Music</h3>
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
                  <h3 className={styles.subhead} tabIndex={7}>Art Design</h3>
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
                  <h3 className={styles.subhead} tabIndex={8}>Writing</h3>
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
        <NavBar tabIndex={9} />
      </div>
    </>
  );
}
