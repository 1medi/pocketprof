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
  const mutation = useMutation(sendChat);

  const handleFirstButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar"); 
    setImageUrls({ ...imageUrls, first: "/pexels-nikolett-emmert-15665996.jpg" });
    setMessages([...messages, { message: prompt, response }]);
  }
  const handleSecondButtonClick = async () => {
    const response = await mutation.mutateAsync("I wanna learn how to lose money");
    setMessages([...messages, { message: "Second prompt", response }]);
    setImageUrls({ ...imageUrls, second: "url_for_second_image.jpg" });
  }

  const handleThirdButtonClick = async () => {
    const response = await mutation.mutateAsync("How do I gamble");
    setMessages([...messages, { message: "Third prompt", response }]);
    setImageUrls({ ...imageUrls, third: "url_for_third_image.jpg" }); 
  }

  const handleFourthButtonClick = async () => {
    const response = await mutation.mutateAsync("What is the best way to order on Uber Eats");
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
            <h1 className={styles.header}>Welcome To OSCAR</h1>
            <p className={styles.subHeader}>HELP US HELP YOU</p>
            <div className={styles.promptContainer}>
              <button className={styles.prompt} onClick={handleFirstButtonClick}>I want to play Guitar!</button>
              <button className={styles.prompt} onClick={handleSecondButtonClick}>I want to lose money fast!</button>
              <button className={styles.prompt} onClick={handleThirdButtonClick}>I want to learn how to gamble!</button>
              <button className={styles.prompt} onClick={handleFourthButtonClick}>I want the uber eats tech!</button>
              <div>

                {messages.map((message, index) => (
                  <div className={styles.responseContainer}key={index}>
                    <p className={styles.response}>{message.response}</p>
                  </div>
                ))}
              </div>

              {messages.length > 0 && (
                <ul className={styles.overlay}>
                  <li>
                  <button onClick={clearPrompt}>Clear</button>                    
                  </li>
                  <li>
                    <button>
                    <Link href="/Courses2">Next Page</Link>
                    </button>
                  </li>              
                </ul>

            )}
            </div>
            
          </main>
        </div>
      </div>
    </>
  )
}
