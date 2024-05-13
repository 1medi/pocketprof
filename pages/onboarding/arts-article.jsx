import React, { useState, useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "./article.module.css";
import axios from 'axios';
import Circles from '@/Components/Shapes/Circles';
import NavBar from "@/Components/Navbar";
import Button3 from '@/Components/Buttons/Button3';
import { useRouter } from 'next/router';
import Painting from "@/public/img/articlePhotos/painting.jpg"
import Painting2 from "@/public/img/articlePhotos/painting2.jpg"
import Painting3 from "@/public/img/articlePhotos/painting3.jpg"
import Painting4 from "@/public/img/articlePhotos/painting4.jpg"
import Painting5 from "@/public/img/articlePhotos/painting5.jpg"

const photos = [
  { id: 1, src: Painting, alt: 'Painting 1' },
  { id: 2, src: Painting2, alt: 'Painting 2' },
  { id: 3, src: Painting3, alt: 'Painting 3' },
  { id: 4, src: Painting4, alt: 'Painting 4' },
  { id: 5, src: Painting5, alt: 'Painting 5' },
];


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

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
      setData(response.data.posts.slice(0, 5));
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

    const shuffledPhotos = shuffleArray(photos);

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
              {data.map((post, index) => {
                const randomPhoto = shuffledPhotos[index % shuffledPhotos.length];
                return (
                  <div key={index} className={styles.article}>
                    <div className={styles.articleInnerContainer}>
                      <div className={styles.category}>
                        <Image src={randomPhoto.src} alt={randomPhoto.alt} />
                      </div>
                      <div className={styles.category}><p>Title: <br/>{post.title}</p></div>
                      <div className={styles.category}><p>Author: <br/>{post.author}</p></div>
                      <div className={styles.category}><p> <br/><a href={post.url}>Read more</a></p></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <NavBar/>
          </main>
        </div>
      </>
    );
  }
