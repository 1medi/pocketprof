import React, { useState, useRef } from 'react';
import styles from "./page.module.css";

const YOUTUBE_PLAYLIST__ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps(){
  const res = await fetch(`${YOUTUBE_PLAYLIST__ITEMS_API}?part=snippet&playlistId=PLwWOafc04Z8y8TEYJIg9lWU5iuslL0_ZK&key=${process.env.YOUTUBE_API_KEY}`);
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
    <div className={styles.mobileContainer}>
      <main className={styles.container}>
       health videos
       <ul className={styles.grid}>
        {data.items.map((item) => {
          console.log(item);
          const {id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key = {id} className={styles.card}>
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <p>
                <img width={medium.width} height={medium.height} src={medium.url} alt=""></img>
              </p>
              <h3 className={styles.cardTitle}>{ title }</h3>
              </a>
            </li>
          )
        })}
        <li>
        </li>
       </ul>
      </main>
    </div>
  );
}
