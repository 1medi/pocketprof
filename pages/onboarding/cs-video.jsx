import React from 'react';
import styles from "./page.module.css";
import Head from 'next/head';
import Header from '@/Components/Header';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  try {
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLwWOafc04Z8y8TEYJIg9lWU5iuslL0_ZK&key=${process.env.YOUTUBE_API_KEY}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data, status ${res.status}`);
    }
    const data = await res.json();
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('Failed to fetch playlist items:', error);
    return {
      props: {
        data: null,
        error: error.message
      }
    };
  }
}

export default function Page({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('data', data);
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
          {data && data.items && data.items.map((item) => {
            console.log(item);
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li key={id} className={styles.card}>
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <img width={medium.width} height={medium.height} src={medium.url} alt={`Thumbnail for ${title}`}></img>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
    </>
  );
}
