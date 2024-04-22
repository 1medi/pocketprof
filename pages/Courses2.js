import React, { useEffect, useState } from "react";
import { usePromptContext } from "./Chat";

export default function Courses2() {
  const { messages } = usePromptContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (messages.length > 0) {
      setIsLoading(false);
    }
  }, [messages]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Display the prompt result */}
          {messages.map((message, index) => (
            <div key={index}>
              <p>{message.response}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
