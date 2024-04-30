import React, { useState } from "react";
import styles from "./Prompt.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Link from "next/link";

// Function to send chat with a specified prompt
const sendChat = async (prompt) => {
  const { data } = await axios.post("api/chat", { prompt });
  console.log('sendChat response', data);
  return data.data;
}


export default function Chat() {
  const [imageUrls, setImageUrls] = useState();
  const [messages, setMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false)
  const mutation = useMutation(sendChat);

  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Beginner Guitar Player)"); 
    setImageUrls({ ...imageUrls, first: "/pexels-nikolett-emmert-15665996.jpg" });
    setMessages([...messages, { message: prompt, response }]);


    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  }
  const handleSecondButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Intermediate Guitar Player)");
    setMessages([...messages, { message: "Second prompt", response }]);
    setImageUrls({ ...imageUrls, second: "url_for_second_image.jpg" });
  }

  const handleThirdButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am an Expert Guitar Player)");
    setMessages([...messages, { message: "Third prompt", response }]);
    setImageUrls({ ...imageUrls, third: "url_for_third_image.jpg" }); 
  }

  const handleFourthButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Master Guitar Player)");
    setMessages([...messages, { message: "Forth prompt", response }]);
    setImageUrls({ ...imageUrls, fourth: "url_for_fourth_image.jpg" });
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
            <h2 className={styles.header}>What is Your Current Skill Level of Guitar?</h2>
            <p className={styles.subHeader}>HELP US HELP YOU</p>
            </div>

            <div className={styles.promptContainer}>
              <button className={styles.prompt} onClick={handleFirstButtonClick}>Basic</button>
              <button className={styles.prompt} onClick={handleSecondButtonClick}>Intermediate</button>
              <button className={styles.prompt} onClick={handleThirdButtonClick}>Expert</button>
              <button className={styles.prompt} onClick={handleFourthButtonClick}>Master</button>
              <div>
                {messages.map((message, index) => (
                  <div className={styles.responseContainer}key={index}>
                    <p className={styles.response}>{message.response}</p>
                  </div>
                ))}
              </div>

              {messages.length > 0 && (
                <ul className={styles.buttonOptions}>
                  <li>
                  <button onClick={clearPrompt}>Clear</button>                    
                  </li>
                  <li>
                    <button>
                    <Link href="/Goals">Next Page</Link>
                    </button>
                  </li>              
                </ul>

            )}
            </div>
            {showMessage && (
                <div className={styles.overlay}>
                  <p>Message or Overlay Content</p>
                </div>
              )}
          </main>
        </div>
      </div>
    </>
  )
}
