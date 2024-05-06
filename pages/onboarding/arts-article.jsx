import React, { useState, useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "./article.module.css";
import axios from 'axios';
import Circles from '@/Components/Shapes/Circles';
import NavBar from "@/Components/Navbar";
import Button3 from '@/Components/Buttons/Button3';
import { useRouter } from 'next/router'; 

export default function artArticles() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  var type = 'Learn-about-artistic-techniques';
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

  const navigateToAnotherPage = () => {
    router.push('/Home'); 
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
      <Circles title={"Articles"}/>
      
      <main className={`${styles.main}`}>
        {data.length === 0 ? (
          <div className={styles.buttonContainer}>
          <button onClick={grabNews} disabled={isLoading} className={styles.button}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
          </div>

        ) : (
          <button onClick={navigateToAnotherPage} className={styles.button}>
            Home
          </button>
        )}
        {error && <p>{error}</p>}
        <div className={styles.articleContainer}>
        {data.map((posts, index) => (
          <div key={index} className={styles.article}>
            <div className={styles.articleInnerContainer}>
            <div className={styles.category}><p>Category: <br/> {posts.section_title}</p></div>
            <div className={styles.category}><p>Title: <br/> {posts.title}</p></div>
            <div className={styles.category}><p>Author: <br/>{posts.author}</p></div>
            <div className={styles.category}><p> <br/><a href={posts.url}>Read more</a></p></div>
            </div>
            </div>
        ))}
        </div>


      <NavBar/>
      </main>
      </div>

    </>
  );
}
