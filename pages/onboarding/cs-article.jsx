import React, { useState, useEffect } from 'react';
import Head from "next/head";
import styles from "./article.module.css";
import axios from 'axios';
import Circles from '@/Components/Shapes/Circles';
import NavBar from "@/Components/Navbar";

export default function csArticles() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const grabNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        var apiKey = process.env.NEXT_PUBLIC_API_KEY;
        var type = 'learn-about_computer_languages_basic';
        const url = `https://api.webz.io/newsApiLite?token=${apiKey}&q=${type}`;
        const response = await axios.get(url);
        setData(response.data.posts);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    grabNews();
  }, []);

  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="On-boarding Process" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
        <Circles title={"Articles"} />
        <main className={`${styles.main}`}>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data.map((post, index) => (
            <div key={index} className={styles.article}>
              <div className={styles.articleInnerContainer}>
                <div className={styles.category}><p className={styles.titles}>Title:</p><p>{post.title}</p></div>
                <div className={styles.category}><p className={styles.titles}>Author:</p><p>{post.author}</p></div>
                <div className={styles.category}><p><a href={post.url} tabIndex={0}>Read more</a></p></div>
              </div>
            </div>
          ))}
          <NavBar />
        </main>
      </div>
    </>
  );
}
