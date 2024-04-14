import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/LandingPage.module.css";
import axios from 'axios';
import { useState } from "react";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  var type = 'guitar';
  var sortBy = 'publishedAt';
  var apiKey = process.env.NEXT_PUBLIC_API_KEY;
  var date = '2024-04-13';
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

  const grabNews = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await axios.get(url);
      console.clear();
      setData(response.data.articles); 
      console.log(response.data.articles);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="description" content="On-boarding Process" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <button onClick={grabNews} disabled={isLoading} className={styles.button}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        {error && <p>{error}</p>}
        {data.map((article, index) => (
          <div key={index} className={styles.article}>
            <div className={styles.author}><p>Author: {article.author}</p></div>
            <div className={styles.title}><p>Title: {article.title}</p></div>
            <div className={styles.content}><p>Content: {article.content}</p></div>
          </div>
        ))}
      </main>
    </>
  );
}
