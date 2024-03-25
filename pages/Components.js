import Head from "next/head";
import styles from "@/styles/Components.module.css"
import Image from "next/image";
import NavBar from "@/Components/Navbar";
import Header from "@/Components/Header"
import Button1 from "@/Components/Buttons/Oscar"
import Button2 from "@/Components/Buttons/Button2"
import Button3 from "@/Components/Buttons/Button3";
import ArrowLeft from "@/Components/Shapes/Arrows/ArrowLeft";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";
import Plus from "@/Components/Shapes/Plus";
import TooltipTop from "@/Components/Shapes/Tooltips/TooltipTop";
import TooltipBottom from "@/Components/Shapes/Tooltips/TooltipBottom";
import TooltipRight from "@/Components/Shapes/Tooltips/TooltipRight";
import TooltipLeft from "@/Components/Shapes/Tooltips/TooltipLeft";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
      <label>Buttons!</label>
        <div className={styles.buttonContainer}>
          <Button1/>
          <Button2/>
          <Button3/>
        </div>
        <label>Shapes!</label>
        <div className={styles.shapes}>
        <ArrowLeft/>
        <ArrowRight/>
        <Plus/>
        <TooltipTop/>
        <TooltipBottom/>
        <TooltipRight/>
        <TooltipLeft/>
        </div>
      <NavBar/>
      </main>
    </>
  );
}
