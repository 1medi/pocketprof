import React, { useState } from "react";
import styles from "./AskOscar.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import Button3 from "../Buttons/Button3";

const sendChat = async (prompt) => {
  const { data } = await axios.post("api/askOscar", { prompt });
  console.log('sendChat response', data);
  return data.data;
}

export default function AskOscar() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const mutation = useMutation(sendChat);
  const formatResponse = (response) => {
    let formattedResponse = '';
    if (response.includes("![") && response.includes(")")) {
      const imageUrl = response.substring(response.indexOf("(") + 1, response.lastIndexOf(")"));
      formattedResponse += `<img src="${imageUrl}" alt="Image" />`;
    }
    formattedResponse += response.replace(/##(.*?)##/g, '<strong>$1</strong>');
    formattedResponse = formattedResponse.replace(/#(.*?)#/g, '<strong>$1</strong>');

    return formattedResponse;
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
      <div className={styles.promptContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit} >
          <input
            className={styles.input}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Got a Question?" />
          <div className={styles.buttonContainer}>
            <Button3
              type="submit"
              name={"Send"}
            />
          </div>

        </form>
        <section className={styles.gptContainer}>
          {messages.map((message, index) => (
            <div className={styles.responseContainer} key={index}>
              <p className={styles.message}>{message.message}</p>
              <p className={styles.response} dangerouslySetInnerHTML={{ __html: formatResponse(message.response) }} />
            </div>
          ))}
        </section>
      </div>
      {messages.length > 0 && (
        <section id="label">
          <ul className={styles.buttonOptions}>
            <li>
              <button onClick={clearPrompt}>Clear</button>
            </li>
          </ul>
        </section>
      )}
    </>
  )
}