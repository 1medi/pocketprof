import React, { useState, useRef } from 'react';
import styles from "./page.module.css";

export default function Page() {

  return (
    <div className={styles.mobileContainer}>
      <main className={styles.container}>
       health article
      </main>
    </div>
  );
}
import React, { useState, useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "./article.module.css";
import axios from 'axios';
import Header from "@/Components/Header";
import NavBar from "@/Components/Navbar";


export default function artArticles() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  var type = 'Learn_about_artistic_techniques';
  var apiKey = process.env.NEXT_PUBLIC_API_KEY;
  var date = '2024-04-13';
  const url = `https://api.webz.io/newsApiLite?token=${apiKey}&q=${type}`;

  const grabNews = async () => {
    setIsLoading(true);
    setError(null); 
    try {
      const response = await axios.get(url);
      console.clear();
      setData(response.data.posts); 
      console.log(response.data.posts);
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
        <title>Articles</title>
        <meta name="description" content="On-boarding Process" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
      <Header name={"Articles"}/>
      <div className={styles.envContainer}>
      </div>
      
      <main className={`${styles.main}`}>
        <button onClick={grabNews} disabled={isLoading} className={styles.button}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        {error && <p>{error}</p>}
        {data.map((posts, index) => (
          <div key={index} className={styles.article}>
            <div className={styles.author}><p>Website: {posts.site_full}</p></div>
            <div className={styles.title}><p>Title: {posts.title}</p></div>
            <div className={styles.content}><p>Content: {posts.main_image}</p></div>
            <div className={styles.url}></div><p>URL: <a href={posts.url}>Read more</a></p></div>
        ))}

      <NavBar/>
      </main>
      </div>

    </>
  );
}