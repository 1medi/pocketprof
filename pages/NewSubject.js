import Head from "next/head";
import NavBar from "@/Components/Navbar";
import styles from "@/styles/NewSubject.module.css";
import CategoryButton from "@/Components/Buttons/CategoriesButton";
import Link from "next/link";
import HomePageCircles from "@/Components/HomePageCircles";
import OscarHome from "@/Components/OscarHome";
import FloatingOscar from "@/Components/FloatingOscar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Discover a new subject here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer} tabIndex={0}>
        <HomePageCircles tabIndex={1} />
        <main className={styles.main} tabIndex={2}>
          <div className={styles.heading__section} tabIndex={3}>
            <div className={styles.banner__content} tabIndex={4}>
              <div className={styles.heading__container}>
                <h1 className={styles.heading} tabIndex={5}>
                  Explore Your Potential
                </h1>
              </div>
              <div className={styles.heading__container2}>
                <p className={styles.heading2} tabIndex={6}>
                  One step at a time
                </p>
              </div>
              <div className={styles.description__container} tabIndex={7}>
                <p className={styles.description} tabIndex={8}>
                  Learn the skills your desire, at your own pace
                </p>
              </div>
              <div className={styles.divider} tabIndex={9}></div>
              <div className={styles.subheading__container} tabIndex={10}>
                <p className={styles.subheading} tabIndex={11}>
                  Explore popular categories and begin your next learning journey
                </p>
              </div>
              <div className={styles.divider} tabIndex={12}></div>
            </div>
            <div className={styles.category__button__container} tabIndex={13}>
              <Link href={'/ArtsCreative'}>
                <CategoryButton title="Arts / Creative" backgroundImage="/img/arts.jpg" tabIndex={14} />
              </Link>
              <CategoryButton title="Technical" backgroundImage="/img/technicalz.jpg" tabIndex={15} />
              <CategoryButton title="Fitness / Lifestyle" backgroundImage="/img/gym.jpg" tabIndex={16} />
            </div>
            <div className={styles.FloatingOscar} tabIndex={17}>
              <FloatingOscar tabIndex={18}/>
            </div>
          </div>
          <NavBar tabIndex={19} />
        </main>
      </div>
    </>
  )
}
