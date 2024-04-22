import React, { useState } from "react";
import axios from "axios";

export default function Images() {
  const [imageUrl, setImageUrl] = useState(null);

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

  const handleClick = async () => {
    const result = await sendImages();
    setImageUrl(result);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
}     
