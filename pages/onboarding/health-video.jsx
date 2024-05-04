import React, { useState, useRef } from 'react';
import styles from "./page.module.css";
import SimpleButton from '@/Components/Buttons/simpleButton';
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/Components/Header';

const YOUTUBE_PLAYLIST__ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps(){
  const res = await fetch(`${YOUTUBE_PLAYLIST__ITEMS_API}?part=snippet&playlistId=PLwWOafc04Z8xdxC3ZAqbN6CynnYUZF5An&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
export default function Page({ data }) {
  console.log('data', data);
  return (
    <>
      <Head>
        <title>Videos</title>
        <meta name="description" content="Explore our recommended videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Header name="Videos" />
        <main className={styles.container}>
          <h1 className={styles.header}>Take a look at our recommended videos!</h1>
          <ul className={styles.grid}>
            {data.items.map((item) => {
              console.log(item);
              const { id, snippet = {} } = item;
              const { title, thumbnails = {}, resourceId } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <li key={id} className={styles.card}>
                  <a className={styles.imageContainer} href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <div className={styles.innerContainer}>
                      <img width={medium.width} height={medium.height} src={medium.url} alt={title} />
                      <h3 className={styles.cardTitle}>{title}</h3>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={styles.break}></div>
          <div className={styles.textContainer}>
            <h3>Or you can choose to</h3>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/NewSubject">

                <SimpleButton name="Go Home" />

            </Link>
          </div>
        </main>
      </div>
    </>
  );
}