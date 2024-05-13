import Head from "next/head";
import NavBar from "@/Components/Navbar";
import styles from "@/styles/NewSubject.module.css";
import CategoryButton from "@/Components/Buttons/CategoriesButton";
import Link from "next/link";
import HomePageCircles from "@/Components/HomePageCircles";
import OscarHome from "@/Components/OscarHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Discover a new subject here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <HomePageCircles/>
        <main className={styles.main}>
          <div className={styles.heading__section}>
          <div className={styles.banner__content}>
            <div className={styles.heading__container}>
              <h1 className={styles.heading}>
                  Explore Your Potential
              </h1>
            </div>
            <div className={styles.heading__container2}>
              <p className={styles.heading2}>
                One step at a time
              </p>
            </div>
            <div className={styles.description__container}>
              <p className={styles.description}>
                Learn the skills your desire, at your own pace
              </p>
            </div>
            <div className={styles.divider}>
            </div>
            <div className={styles.subheading__container}>
              <p className={styles.subheading}>
                Explore popular categories and begin your next learning journey
              </p>
            </div>
            <div className={styles.divider}>
            </div>
          </div>
          <div className={styles.category__button__container}>
            <Link href={'/ArtsCreative'}>
              <CategoryButton title="Arts / Creative" backgroundImage="/img/arts.jpg" />
            </Link>
            <CategoryButton title="Technical" backgroundImage="/img/technicalz.jpg" />
            <CategoryButton title="Fitness / Lifestyle" backgroundImage="/img/gym.jpg" />
            </div>
          </div>
          <NavBar />
        </main>
      </div>

  </>
  )
}