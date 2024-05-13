import React, { useState } from 'react';
import { useUser } from '@/pages/UserContext';
import styles from "./Login.module.css"
import Button3 from '../Buttons/Button3';

export default function Login() {
  const [localUsername, setLocalUsername] = useState('');
  const { setUsername } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(localUsername);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <div className={styles.greeting}><p className={styles.hello}>Hello Stranger!</p><br/><p className={styles.name}> What is your name? </p></div>
        <div className={styles.inputBox}>
            <input
            type="text"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
            required
            className={styles.input}
            />
        </div>
      </label>
      <Button3 name="Submit" type="submit" />
    </form>
  );
}
