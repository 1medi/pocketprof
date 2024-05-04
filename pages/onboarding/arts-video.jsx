import React from 'react';
import styles from "./video.module.css";
import Head from 'next/head';
import Header from '@/Components/Header';
import Button3 from '@/Components/Buttons/Button3';
import Link from 'next/link';

const YOUTUBE_PLAYLIST__ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps(){
  const res = await fetch(`${YOUTUBE_PLAYLIST__ITEMS_API}?part=snippet&playlistId=PLwWOafc04Z8xex8KydZcUxiFzwo-T1PSS&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
export default function Page({data}) {
console.log('data', data)
    return (
      <>
        <Head>
          <title>Videos</title>
          <meta name="description" content="On-boarding Process" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.mobileContainer}>
          <Header name="Videos" />
          <main className={styles.container}>
            <ul className={styles.grid}>
              {data.items.map((item) => {
                console.log(item);
                const { id, snippet = {} } = item;
                const { title, thumbnails = {}, resourceId } = snippet;
                const { medium = {} } = thumbnails;

                return (
                  <li key={id} className={styles.card}>
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                      <img width={medium.width} height={medium.height} src={medium.url} alt={title} />
                      <h3 className={styles.cardTitle}>{title}</h3>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.buttonContainer}>
            <Link href="/NewSubject">
                <Button3 name="Go Home" />
            </Link>
          </div>
          </main>
        </div>
      </>
    );
}
