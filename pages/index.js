import Head from "next/head";
import styles from "@/styles/Onboarding.module.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Button3 from "@/Components/Buttons/Button3";
import Image from "next/image";
import React, { useState } from 'react';


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Landing() {

  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Sign in or sign up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <main className={`${styles.main} ${montserrat.className}`}>
          <div className={styles.container}>
            <Image
              priority
              src="/img/oscar/oscar-main.svg"
              width="300"
              height="300"
              alt="oscar"
              className={styles.oscar}
            />
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Login</button>
            </form>
            <div className={styles.titleBox}><h1 className={styles.title}>Welcome to <br />Pocket Prof.</h1></div>
            <div className={styles.descriptionContainer}>
              <h3>Let's dig in your interest together!</h3>
            </div>
            <div className={styles.containerContainer}>
              <Link href='/onboarding/page' className={styles.buttonContainer}>
                <Button3 name={"Start"} />
              </Link>
              <Link href='/NewSubject' className={styles.buttonContainer}>
                <Button3 name={"Skip"} />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}