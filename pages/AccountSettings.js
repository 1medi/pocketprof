import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AccountSettings.module.css";
import NavBar from "@/Components/Navbar";
import AccountName from "@/Components/Popup/AccountName/AccountName";
import React, { useState } from 'react';
import Image1 from "@/public/img/nature-4964153_1920.jpg"
import Pencil from "@/public/img/pencil.svg"
import { Montserrat } from "next/font/google";
import Circles from "@/Components/Shapes/Circles";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function AccountSettings() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [accountName, setAccountName] = useState("Drake Williams");
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSaveNewName = (newName) => {
    setAccountName(newName);
  };

  return (
    <>
      <Head>
        <title>Account Settings</title>
        <meta name="description" content="Settings on the user account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <Circles title="Account Settings"/>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
                src={Image1}
                width={150}
                height={150}
                className={styles.profileImg}
                tabIndex={1}
                alt={"User Profile Image"}
              />
            </div>
            <h2 className={styles.name}>{accountName}</h2>
            <h3 className={styles.email}>drakewilliams@hotmail.net</h3>
            <h4 className={styles.number}>604-069-7201</h4>
            <div className={styles.divider}></div>
            <div className={styles.editOptions}>
              <div className={styles.optionContainer}>
                <Image
                  onClick={togglePopup}
                  src={Pencil}
                  width={25}
                  height={25}
                  tabIndex={2}
                  className={styles.pencil}
                />
                {isPopupOpen && <AccountName onClose={togglePopup} onSave={handleSaveNewName} />}
                <h4 className={styles.title}>Account Name: </h4>
                <p className={styles.content}>{accountName}</p>
              </div>
              <div className={styles.optionContainer}>
                <Image
                  src={Pencil}
                  width={25}
                  height={25}
                  className={styles.pencil}
                  tabIndex={3}
                />
                <h4 className={styles.title}>Pronouns: </h4>
                <p className={styles.content}>He / Him</p>
              </div>
              <div className={styles.optionContainer}>
                <Image
                  src={Pencil}
                  width={25}
                  height={25}
                  className={styles.pencil}
                  tabIndex={4}
                />
                <h4 className={styles.title}>Bio:</h4>
                <p className={styles.content}>“Keke do you love me....."</p>
              </div>
              <div className={styles.optionContainer}>
                <Image
                  src={Pencil}
                  width={25}
                  height={25}
                  className={styles.pencil}
                  tabIndex={5}
                />
                <h4 className={styles.title}>E-Mail: </h4>
                <p className={styles.content}>drakewilliams@hotmail.net</p>
              </div>
              <div className={styles.optionContainer}>
                <Image
                  src={Pencil}x
                  width={25}
                  height={25}
                  className={styles.pencil}
                  tabIndex={6}
                />
                <h4 className={styles.title}>Phone Number: </h4>
                <p className={styles.content}>604-069-7201</p>
              </div>
            </div>
          </div>
        </main>
        <NavBar />
      </div>
    </>
  );
}
