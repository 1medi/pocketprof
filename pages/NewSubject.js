import Head from "next/head";
import NavBar from "@/Components/Navbar";
import Image from "next/image";
import styles from "@/styles/NewSubject.module.css";
import { Montserrat } from "next/font/google";
import CategoryButton from "@/Components/Buttons/CategoriesButton";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";
import Header from "@/Components/Header";
import OscarHome from "@/Components/OscarHome";

const montserrat = Montserrat({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>New Subject</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title={"Learn Something New"}/>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.heading__section}>
          <div className={`${styles.background__circle}`}></div>
          <div className={`${styles.background__circle2}`}></div>
          <div className={styles.oscar__container}>
            <div className={styles.oscar}>
              <OscarHome/>
            </div>
          </div>
          <div className={styles.banner__content}>
            <div className={styles.heading__container}>
              <h1 className={styles.heading}>
                  Explore Your Potential
              </h1>
              <h2 className={styles.heading__second__line}>
                  One step at a time
              </h2>
            </div>
          </div>
          <div className={styles.subheading__section}>
            <div className={styles.subheading__container}>
              </div>
              <div className={styles.categories__section__container}>
                <h2 className={styles.subhead}>
                  Categories
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.category__button__container}>
            <Link href={'/ArtsCreative'}>
              <CategoryButton title="Arts / Creative" backgroundImage="/img/arts.jpg" />
            </Link>
            <CategoryButton title="Technical" backgroundImage="/img/technicalz.jpg" />
            <CategoryButton title="Fitness / Lifestyle" backgroundImage="/img/gym.jpg" />
          </div>
          <NavBar />
        </main>
      </div>

    </>
  );
}