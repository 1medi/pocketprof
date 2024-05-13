import React, { useState } from 'react';
import { useUser } from '@/pages/UserContext';
import styles from "./Login.module.css"

export default function Login() {
  const [localUsername, setLocalUsername] = useState('');
  const { setUsername } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(localUsername);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className={styles.greeting}>Hello Stranger!<br/>What is your name?</div>
        <input
          type="text"
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
