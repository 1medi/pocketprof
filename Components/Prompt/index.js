import React, { useState } from "react";
import styles from "./Prompt.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Link from "next/link";
import Modal from "react-modal";
import Oscar from "../Oscar";
import AskOscar from "../AskOscar";
import Button3 from "../Buttons/Button3";

// Function to send chat with a specified prompt
const sendChat = async (prompt) => {
  const { data } = await axios.post("api/chat", { prompt });
  console.log('sendChat response', data);
  return data.data;
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
    formattedResponse += response.replace(/##(.*?)##/g, '<strong>$1</strong>');
    formattedResponse = formattedResponse.replace(/#(.*?)#/g, '<strong>$1</strong>');
    
    return formattedResponse;
  }
  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("I want to learn how to play a guitar. Give me a list of 3 goals(I am a Beginner Guitar Player)");
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
        <div className={styles.resourceContainer}>
        <Button3 name={"Get Resources"} className={styles.prompt} onClick={handleFirstButtonClick}/>
        </div>
        
        <section className={styles.gptContainer}>
          {messages.map((message, index) => (
            <div className={styles.responseContainer} key={index}>
              <p className={styles.message}>{message.message}</p>
              <p id="label" className={styles.response} dangerouslySetInnerHTML={{ __html: formatResponse(message.response) }} />
            </div>
          ))}
        </section>
        <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <Oscar />
          <h1>Oscar is searching for resources!</h1>
          <div className={styles.buttonContainer}>
            <Link
              href={"#label"}>
              <Button3
              name={"Reveal Resources"}
                className={styles.button}
                onClick={() => setIsOpen(false)}
                ariaHideApp={false}/>
            </Link>
          </div>

        </Modal>
        {messages.length > 0 && (
          <section>
            <ul className={styles.buttonOptions}>
              <li className={styles.button_container}>
                <Button3 name={"Clear"}onClick={clearPrompt}/>
              </li>
              <li className={styles.button_container}>
              <Link href="/AddAGoal">
                <Button3 name={"Generate Goals"}/>
                </Link>
              </li>
            </ul>
          </section>
        )}
      </div>
    </>
  )
}
