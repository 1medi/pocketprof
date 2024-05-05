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
              <Link 
              href={"/ShowResources"}>
              <button className={styles.prompt}>Basic</button>
              </Link>
              <Link
              href={"/ShowResources"}
              >
              <button className={styles.prompt}>Intermediate</button>              
              </Link>
              <Link
              href={"/ShowResources"}
              >
              <button className={styles.prompt}>Expert</button>           
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
