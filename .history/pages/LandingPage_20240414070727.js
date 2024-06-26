import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {useState, useEffect} from "react";
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState([]);
  var type= 'guitar'
  var date= '2024-01-01'
  var sortBy= 'publishedAt'

  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY; 
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&${apiKeyInfo}`

  useEffect(()=> {
    fetch(url)
    .then((res) => res.json())
    .then((info) => {
      setData(info.articles);
      console.log(info.articles);
    })
  },[])

  return (
    <>
      <Head>
        <title>CLanding page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      
      </main>
    </>
  );
}
