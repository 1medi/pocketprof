import React, { useState } from "react";
import styles from "./Prompt.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Link from "next/link";
import Modal from "react-modal";
import Oscar from "../Oscar";
import Button3 from "../Buttons/Button3";
import Khaled from "@/public/img/khaled.jpg"
import Guitar from "@/public/img/Guitar1.jpg"
import Guitar2 from "@/public/img/Guitar2.jpg"
import Image from "next/image";

const photos = [
  { id: 1, src: Khaled, alt: "Photo 1" },
  { id: 2, src: Guitar, alt: "Photo 2" },
  { id: 3, src: Guitar2, alt: "Photo 3" }
]

const sendChat = async (prompt) => {
  const { data } = await axios.post("api/chat", { prompt });
  console.log('sendChat response', data);
  return data.data;
}

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const mutation = useMutation(sendChat);
  const [isOpen, setIsOpen] = useState(false)

  Modal.setAppElement('body');

  const formatResponse = (response) => {
    let formattedResponse = '';

    const regex = /\[(.*?)\]\((.*?)\)/g;
    const matches = response.matchAll(regex);

    let index = 1;
    for (const match of matches) {
      const linkText = match[1];
      const linkUrl = match[2];
      formattedResponse += `${index}. <a href="${linkUrl}" target="_blank">${linkText}</a>`;
      index++;
    }

    formattedResponse = formattedResponse.replace(/##(.*?)##/g, '<strong>$1</strong>');
    formattedResponse = formattedResponse.replace(/#(.*?)#/g, '<strong>$1</strong>');

    return formattedResponse;
  }
  const handleFirstButtonClick = async () => {
    setShowMessage(true)
    const response = await mutation.mutateAsync("I want to learn how to play a guitar. Give me a list of 5 resources (I am a Beginner Guitar Player)");
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
          <Button3 name={"Fetch"} className={styles.prompt} onClick={handleFirstButtonClick} />
        </div>

        <section className={styles.gptContainer}>
          {messages.map((message, index) => {
            const randomPhotoIndex = Math.floor(Math.random() * photos.length);
            const randomPhoto = photos[randomPhotoIndex];

            return (
              <div className={styles.responseContainer} key={index}>
                <p className={styles.message}>{message.message}</p>
                <p id="response" className={styles.response} dangerouslySetInnerHTML={{ __html: formatResponse(message.response) }} />
                <div>
                  <Image src={randomPhoto.src} alt={randomPhoto.alt} />
                </div>
              </div>
            );
          })}
        </section>
        <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <div className={styles.oscarContainer}>
            <Oscar />
          </div>

          <h1>Oscar is searching for resources!</h1>
          <div className={styles.buttonContainer}>
            <Button3
              name={"Reveal"}
              className={styles.button}
              onClick={() => setIsOpen(false)}
              ariaHideApp={false} />
          </div>

        </Modal>
        {messages.length > 0 && (
          <section>
            <ul className={styles.buttonOptions}>
              <li className={styles.button_container}>
                <Button3 name={"Clear"} onClick={clearPrompt} />
              </li>
              <li className={styles.button_container}>
                <Link href="/AddAGoal">
                  <Button3 name={"See Goals"} />
                </Link>
              </li>
            </ul>
          </section>
        )}
      </div>
    </>
  )
}
