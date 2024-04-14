import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from 'axios'
import {useState, useEffect} from "react";

export default function LandingPage() {
  const [data, setData] = useState([]);

  var type= 'guitar'
  var sortBy= 'publishedAt'
  var apiKey = process.env.NEXT_PUBLIC_API_KEY; 
  
  const url = `https://newsapi.org/v2/everything?q=${type}&from={2024-02-01}&sortBy=${sortBy}&apiKey=${apiKey}`;

 const GrabNews = () => {
  axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data);
      console.log(response.data);
    })
    .catch(err => {
    console.error(err); 
    })

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
        <button onClick={() => GrabNews()}>Grab Info</button>
          {
            data.articles && data.articles.map((d, index) => {
              return(
              <div key={index}>
                <div>{d.author}</div>
                <div>{d.title}</div>
                </div>
              )
            })
          }
      </main>
    </>
  );
}
