import styles from "./Prompt.module.css";
import axios from "axios";
import Link from "next/link";
import Button3 from "../Buttons/Button3";

const sendChat = async (prompt) => {
  const { data } = await axios.post("api/chat", { prompt });
  console.log('sendChat response', data);
  return data.data;
}

export default function Chat() {

  return (
    <>
      <div className={styles.container}>
        <div>
          <main>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>What is your current skill level with Guitar?</h2>
              <p className={styles.subHeader}>Let Oscar help you!</p>
            </div>

            <div className={styles.promptContainer}>
              <Link
                href={"/ShowResources"}>
                <Button3 className={styles.prompt} name={"Basic"} />
              </Link>
              <Link
                href={"/ShowResources"}
              >
                <Button3 className={styles.prompt} name={"Average"} />
              </Link>
              <Link
                href={"/ShowResources"}
              >
                <Button3 className={styles.prompt} name={"Expert"} />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
