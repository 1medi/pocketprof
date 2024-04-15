import Head from "next/head";
import styles from "@/styles/LandingPage.module.css";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstArticleTitle, setFirstArticleTitle] = useState('');

  var type = 'How To Paint';
  var sortBy = 'publishedAt';
  var apiKey = process.env.NEXT_PUBLIC_API_KEY;
  var date = '2024-04-13';
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        const articles = response.data.articles;
        setData(articles);
        if (articles.length > 0) {
          setFirstArticleTitle(articles[0].title);
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="description" content="On-boarding Process" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {error && <p>{error}</p>}
        {firstArticleTitle && (
          <h1>{firstArticleTitle}</h1>
        )}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.map((article, index) => (
              <div key={index} className={styles.article}>
                <div className={styles.author}><p>Author: {article.author}</p></div>
                <div className={styles.title}><p>Title: {article.title}</p></div>
                <div className={styles.content}><p>Content: {article.content}</p></div>
                <div className={styles.url}><p>URL: <a href={article.url}>Read more</a></p></div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
