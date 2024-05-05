import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AppSettings.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import ArrowLeft from "@/Components/Shapes/Arrows/ArrowLeft";
import Link from "next/link";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";
import Pencil from "@/public/img/pencil.png"

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>App Settings</title>
        <meta name="description" content="Settings on Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Header name={"App Settings"} />
        <Link href="/">
          <ArrowLeft bottom="55px" />
        </Link>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.container}>
          <div className={styles.optionsOuter}>
          <h4 className={styles.subHeading}>Accessibility</h4>
            <div className={styles.optionsContainer}>
              <Image src={Pencil} width={25} height={25} />
              <p className={styles.description}>Dark Mode</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src={Pencil} width={25} height={25} />
              <p className={styles.description}>Font Options</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src={Pencil}width={25} height={25} />
              <p className={styles.description}>Color Blindness</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src={Pencil} width={25} height={25} />
              <p className={styles.description}>Language</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src={Pencil} width={25} height={25} />
              <p className={styles.description}>Narrator / Voice</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src={Pencil} width={25} height={25} />
              <p className={styles.description}>Privacy</p>
              <ArrowRight />
            </div>
          </div>
          <div className={styles.optionsOuter}>
          <h4 className={styles.subHeading}>General</h4>
          <div className={styles.optionsContainer}>
            <Image src={Pencil} width={25} height={25} />
            <p className={styles.description}>Get Help</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <Image src={Pencil}width={25} height={25} />
            <p className={styles.description}>Rate The App</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <Image src={Pencil} width={25} height={25} />
            <p className={styles.description}>Log Out</p>
            <ArrowRight />
          </div>
          </div>
          </div>
        </main>
        <NavBar/>
      </div>
    </>
  );
}
