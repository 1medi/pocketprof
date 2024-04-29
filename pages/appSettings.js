import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AppSettings.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import ArrowLeft from "@/Components/Shapes/Arrows/ArrowLeft";
import Link from "next/link";
import Image1 from "@/public/img/nature-4964153_1920.jpg";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";

const montserrat = Montserrat({ subsets: ['latin'] });

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
        <Header name={"App Settings"} />
        <Link href="/">
          <ArrowLeft bottom="55px" />
        </Link>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.container}>
            <Image
              className={styles.image}
              src={Image1}
              width={100}
              height={100}
            />
            <h5>Drake Williams</h5>
            <p>drake@gmail.com</p>
          </div>

          <div className={styles.optionsOuter}>
            <h4>Account</h4>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Edit Name</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Edit Email</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Edit Phone Number</p>
              <ArrowRight />
            </div>
          </div>
          <h4>Accessibility</h4>
          <div className={styles.optionsOuter}>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Dark Mode</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Font Options</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Color Blindness</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Language</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Narrator / Voice</p>
              <ArrowRight />
            </div>
            <div className={styles.optionsContainer}>
              <Image src="" width={25} height={25} />
              <p className={styles.description}>Privacy</p>
              <ArrowRight />
            </div>
          </div>
          <h4>General</h4>
          <div className={styles.optionsOuter}>
          <div className={styles.optionsContainer}>
            <Image src="" width={25} height={25} />
            <p className={styles.description}>Get Help</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <Image src="" width={25} height={25} />
            <p className={styles.description}>Rate The App</p>
            <ArrowRight />
          </div>
          <div className={styles.optionsContainer}>
            <Image src="" width={25} height={25} />
            <p className={styles.description}>Log Out</p>
            <ArrowRight />
          </div>
          </div>
        </main>
        <NavBar/>
      </div>
    </>
  );
}