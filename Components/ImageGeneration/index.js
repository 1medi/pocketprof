import React, { useState } from "react";
import axios from "axios";
import styles from "./Images.module.css";
import Button3 from "../Buttons/Button3";

export default function Images() {
  const [imageUrl, setImageUrl] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendImages = async (prompt) => {
    try {
      const { data } = await axios.post("/api/image", { prompt });
      console.log('sendImages response', data);
      return data.imageUrl;
    } catch (error) {
      console.error('Error sending images:', error);
      return null;
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGenerateImage = async () => {
    const result = await sendImages(inputValue);
    setImageUrl(result);
  };

  const clearPrompt = () => {
    setMessages([]);
    setImageUrl(null);
    setInputValue("");
  }

  return (
    <div className={styles.imageContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="What are you thinking?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className={styles.buttonContainer}>
      <Button3 name={"Generate"} onClick={handleGenerateImage}/>
      </div>

      {imageUrl && (
        <ul className={styles.buttonOptions}>
          <li>
            <div className={styles.buttonContainer}>
            <Button3 name={"Clear"} onClick={clearPrompt}/>
            </div>
          </li>
        </ul>
      )}
      {
        imageUrl && <img src={imageUrl} alt="Generated Image" />
      }
    </div>
  );
}
