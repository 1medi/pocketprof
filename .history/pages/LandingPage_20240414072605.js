import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from 'axios'

export default function LandingPage() {
  
  var type= 'guitar'
  var date= '2024-01-01'
  var sortBy= 'publishedAt'
  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY; 
  
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-14&sortBy=publishedAt&apiKey=2bff9ea8c3a84fbaba0f8cde9440b2fd`;

 const GrabNews = () => {
  axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data);
      console.log(response.data);
    })
    .catch(err => {
    console.error('Failed to fetch news', err); 
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
      </main>
    </>
  );
}
