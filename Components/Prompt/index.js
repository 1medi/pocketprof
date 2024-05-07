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


const formatResponse = (response) => {
  let formattedResponse = response.replace(/##(.*?)##/g, '<strong>$1</strong>');
  formattedResponse = formattedResponse.replace(/#(.*?)#/g, '<strong>$1</strong>');

  return formattedResponse;
}
export default function Chat() {
  const [imageUrls, setImageUrls] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const mutation = useMutation(sendChat);
  const [isOpen, setIsOpen] = useState(false)

  Modal.setAppElement('body');


  const formatResponse = (response) => {
    let formattedResponse = '';
  
    // Check if the response contains an image
    if (response.includes("![") && response.includes(")")) {
      const imageUrl = response.substring(response.indexOf("(") + 1, response.lastIndexOf(")"));
      formattedResponse += `<img src="${imageUrl}" alt="Image" />`;
    }
  
    // Apply regular formatting to the rest of the response
    formattedResponse += response.replace(/##(.*?)##/g, '<strong>$1</strong>');
    formattedResponse = formattedResponse.replace(/#(.*?)#/g, '<strong>$1</strong>');
  
    return formattedResponse;
  }
  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("I want to learn how to play a guitar (I am a Beginner Guitar Player)");
    setMessages([...messages, { message: prompt, response }]);
    setIsOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mutation.mutateAsync(message)
    setMessages([...messages, { message: message, response: formatResponse(response) }])
    setMessage("")
  }
  const clearPrompt = async => {
    setMessages([]);
  }


  return (
    <>
      <div className={styles.textContainer}>
        <h3 className={styles.header}>Oscar is ready to find some learning resources for you</h3>
      </div>

      <div className={styles.promptContainer}>
        <button className={styles.prompt} onClick={handleFirstButtonClick}>Get Resources</button>
        <form className={styles.formContainer} onSubmit={handleSubmit} >
          <input
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Have Another Question?" />
          <button
            type="submit"
          >Send
          </button>
        </form>
        <section className={styles.gptContainer}>
          {messages.map((message, index) => (
            <div className={styles.responseContainer} key={index}>
              <p className={styles.message}>{message.message}</p>
              <p className={styles.response} dangerouslySetInnerHTML={{ __html: formatResponse(message.response) }} />
            </div>
          ))}
        </section>
        <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <div className={styles.oscarContainer}>
            <Oscar />
          </div>
          <h1>Oscar is searching for resources!</h1>
          <div className={styles.buttonContainer}>
            <Link
              href={"#label"}>
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
          <section id="label">
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
          </section>
        )}
      </div>
    </>
  )
}
