import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Courses.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";
import HorizontalChart from "@/Components/horizontalChart";
import PieChart from "@/Components/pieChart";

const montserrat = Montserrat({ subsets: ['latin'] })

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
        <Header name={"Success Dashboard"}/>
      <main className={`${styles.main} ${montserrat.className}`}>
        <HorizontalChart/>
        <PieChart/>
      </main> 
        <NavBar/>
      </div>

    </>
  );
}
