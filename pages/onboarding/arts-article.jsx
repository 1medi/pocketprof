import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "./article.module.css";
import axios from 'axios';
import Circles from '@/Components/Shapes/Circles';
import NavBar from "@/Components/Navbar";
import { useRouter } from 'next/router';
import Painting from "@/public/img/articlePhotos/painting.jpg"
import Painting2 from "@/public/img/articlePhotos/painting2.jpg"
import Painting3 from "@/public/img/articlePhotos/painting3.jpg"
import Painting4 from "@/public/img/articlePhotos/painting4.jpg"
import Painting5 from "@/public/img/articlePhotos/painting5.jpg"
import Button3 from '@/Components/Buttons/Button3';
import Link from 'next/link';
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const grabNews = async () => {
      setError(null);
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const type = 'Learn-about-artistic-techniques';
        const url = `https://api.webz.io/newsApiLite?token=${apiKey}&q=${type}`;
        const response = await axios.get(url);
        setData(response.data.posts.slice(0, 5));
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    grabNews();
  }, []);

  const navigateToAnotherPage = () => {
    router.push('/NewSubject');
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
        <Circles title={"Articles"} />
        <main className={`${styles.main}`}>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className={styles.articleContainer}>
            {data.map((post, index) => {
              const randomPhoto = shuffledPhotos[index % shuffledPhotos.length];
              return (
                <div key={index} className={styles.article}>
                  <div className={styles.articleInnerContainer}>
                    <div className={styles.imageContainer} tabIndex={0}>
                      <Image className={styles.image} src={randomPhoto.src} alt={randomPhoto.alt} />
                    </div>
                    <div className={styles.category}><p className={styles.titles}>Title:</p><p>{post.title}</p></div>
                    <div className={styles.category}><p className={styles.titles}>Author:</p><p>{post.author}</p></div>
                    <div className={styles.category}><p> <br /><a href={post.url} tabIndex={0}>Read more</a></p></div>
                  </div>
                </div>

              );
              
            })}
              <div className={styles.buttonContainer}>
            <Link href="/NewSubject">
                <Button3 name="Go Home" />
            </Link>
          </div>
          </div>
          <NavBar />
        </main>
      </div>
    </>
  );
}
