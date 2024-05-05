import React, { useState } from "react";
import styles from "./Goals.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Link from "next/link";
import SimpleButton from "@/Components/Buttons/simpleButton";

// Function to send chat with a specified prompt
const sendChat = async (prompt) => {
  const { data } = await axios.post("api/chat", { prompt });
  console.log('sendChat response', data);
  return data.data;
}


export default function Goals() {
  const [imageUrls, setImageUrls] = useState();
  const [messages, setMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false)
  const mutation = useMutation(sendChat);

  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("Give me a single goal i can achieve as a beginner guitar player!"); 
    setImageUrls({ ...imageUrls, first: "/pexels-nikolett-emmert-15665996.jpg" });
    setMessages([...messages, { message: prompt, response }]);


    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  }

  const clearPrompt= async => {
    setMessages([]);
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <main>
            <div className={styles.textContainer}>
            <h2 className={styles.header}>I HAVE SOMETHING FOR YOU</h2>
            <p className={styles.subHeader}>HELP US HELP YOU</p>
            </div>

            <div className={styles.promptContainer}>
              <button className={styles.prompt} onClick={handleFirstButtonClick}>TAP IN</button>
              <div>
                {messages.map((message, index) => (
                  <div className={styles.responseContainer}key={index}>
                    <p className={styles.response}>{message.response}</p>
                    <ul className={styles.buttonOptions}>
                  <li className={styles.listItem}>
                  <SimpleButton name={"Clear"} className={styles.buddon} onClick={clearPrompt}/>                
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/AddAGoal">
                    <SimpleButton name={"Add to Goals"}/>
                    </Link>
                  </li>              
                </ul>
                  </div>
                  
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
