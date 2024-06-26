import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Account.module.css";
import NavBar from "@/Components/Navbar";
import { Montserrat } from "next/font/google";
import Image1 from "@/public/img/nature-4964153_1920.jpg";
import Chart from "@/public/img/chart.png";
import Profile from "@/public/img/user.png";
import Settings from "@/public/img/settings.png";
import Link from "next/link";
import Circles from "@/Components/Shapes/Circles";

const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function Account() {
  return (
    <>
      <Head>
        <title>User Account</title>
        <meta name="description" content="Information and settings on user account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mobileContainer}>
        <Circles title="Account Profile"/>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={Image1}
                width={150}
                height={150}
                className={styles.profileImg}
              />
            </div>
            <h2 className={styles.name}>Drake Williams</h2>
            <h4 className={styles.student}>Student Level: NOOB</h4>
            <h3 className={styles.quote}>“Keke do you love me....."</h3>
            <div className={styles.optionsContainer}>
              <Link href={"SuccessDashboard/SuccessDashboard"} style={{ textDecoration: 'none' }}>
                <div className={styles.successContainer}>
                  <Image
                    className={styles.image}
                    src={Chart}
                    width={38}
                    height={38}
                  />
                  <h4 className={styles.successText} tabIndex={1}>Success Dashboard</h4>
                </div>
              </Link>
              <hr className={styles.shape} />
              <Link href={"AccountSettings"} style={{ textDecoration: 'none' }}>
                <div className={styles.accountContainer}>
                  <Image
                    src={Profile}
                    className={styles.image}
                    width={38}
                    height={38}
                  />
                  <h4 className={styles.successText} tabIndex={2}>Account Settings</h4>
                </div>
              </Link>
              <hr className={styles.shape} />
              <Link href={"ApplicationSettings"} style={{ textDecoration: 'none' }}>
                <div className={styles.appContainer}>
                  <Image
                    src={Settings}
                    className={styles.image}
                    width={38}
                    height={38}
                  />
                  <h4 className={styles.successText} tabIndex={3}>App Settings</h4>
                </div>
              </Link>
              <hr className={styles.shape} />
            </div>
          </div>
        </main>
        <NavBar />
      </div>
    </>
  );
}
