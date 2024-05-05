import React, { useState } from "react";
import styles from "./Prompt.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Link from "next/link";
import Modal from "react-modal";
import Oscar from "../Oscar";

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
  const [isOpen, setIsOpen] = useState(false)

  Modal.setAppElement('body');

  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Beginner Guitar Player)");
    setMessages([...messages, { message: prompt, response }]);
    setIsOpen(true)
  }
  const handleSecondButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Intermediate Guitar Player)");
    setMessages([...messages, { message: "Second prompt", response }]);
  }

  const handleThirdButtonClick = async () => {
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am an Expert Guitar Player)");
    setMessages([...messages, { message: "Third prompt", response }]);
  }


  const clearPrompt = async => {
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
              <div className={styles.gptContainer}>
                {messages.map((message, index) => (
                  <div className={styles.responseContainer} key={index}>
                    <p className={styles.response}>{message.response}</p>
                  </div>
                ))}
              </div>
              <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <div className={styles.oscarContainer}>
                  <Oscar />
                </div>
                <h1>Oscar is ready to find some learning resources for you</h1>
                <div className={styles.buttonContainer}>
                  <Link
                    href={"/ShowResources"}>
                    <button
                      className={styles.button}
                      onClick={() => setIsOpen(false)}
                      ariaHideApp={false}>
                      Show Resources
                    </button>
                  </Link>
                </div>

              </Modal>
              {messages.length > 0 && (
                <ul className={styles.buttonOptions}>
                  <li>
                    <button onClick={clearPrompt}>Clear</button>
                  </li>
                  <li>
                    <button>
                      <Link href="/AddAGoal">Generate Goals</Link>
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
