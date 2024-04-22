import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Settings.module.css";
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google"
import Image1 from "@/public/img/nature-4964153_1920.jpg"
import Chart from "@/public/img/chart.png"
import Profile from "@/public/img/user.png"
import Settings from "@/public/img/settings.png"
import Link from "next/link";
import Header from "@/Components/Header";
const montserrat = Montserrat({
  subsets: ['latin'],
});
export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Header name="Account"/>
              <Image
                src={Image1}
                width={150}
                height={150}
              />
            </div>
            <h2 className={styles.name}>Name</h2>
            <h3 className={styles.quote}>"Banana"</h3>
            <h4 className={styles.student}>Student Level: NOOB</h4>
            <div className={styles.optionsContainer}>
              <Link href={"SuccessDashboard"}>
              <div className={styles.successContainer}>
                <Image
                  className={styles.image}
                  src={Chart}
                  width={38}
                  height={38}
                />
                <h4 className={styles.successText}>Success Dashboard</h4>
              </div>
              </Link>
              <hr className={styles.shape} />
              <Link href={"AccountSettings"}>
              <div className={styles.accountContainer}>
                <Image
                  src={Profile}
                  className={styles.image}
                  width={38}
                  height={38}
                />
                <h4 className={styles.successText}>Account Settings</h4>
              </div>
              </Link>
              <hr className={styles.shape} />

              <Link href={"AppSettings"}>
              <div className={styles.appContainer}>
                <Image
                  src={Settings}
                  className={styles.image}
                  width={38}
                  height={38}
                />
                <h4 className={styles.successText}>App Settings</h4>
              </div>
              </Link>
              <hr className={styles.shape} />
            </div>
          </div>
        </main>
        <NavBar/>
      </div>


    </>
  );
}
