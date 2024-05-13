import styles from "@/styles/GoalEditor.module.css"
import NavBar from "@/Components/Navbar"
import Circles from "@/Components/Shapes/Circles"
import { useEffect, useState } from 'react';
import Button3 from "@/Components/Buttons/Button3";
import Modal from "react-modal";
import Oscar from "@/Components/Oscar";
import Link from "next/link";
import ConfettiButton from "@/Components/Buttons/ConfettiButton";
import Head from "next/head";
export default function GoalEditor() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([]);

  Modal.setAppElement("body");
  const [formData, setFormData] = useState({
    goalName: "",
    goalDescription: "",
    goalDuration: "",
    favoriteColor: "#ff0000", // default value for the color input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setData([...data, formData]);
    console.log(formData);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setData([]); // Clear data array when modal is closed
  };

  return (
    <>
    <Head>
    <title>Goal Editor</title>
        <meta name="description" content="You edit your created goals here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className={styles.mobileContainer}>
      <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}></div>
        <Circles title={"Goal Editor"} />
        <main className={styles.main}>
          <form className={styles.goalEditor} onSubmit={handleSubmit}>
            <div className={styles.editContainer}>
              <label className={styles.label}>Goal Name</label>
              <input
                type="input"
                name="goalName"
                placeholder="Play the guitar once a day for a week!"
                value={formData.goalName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.editContainer}>
              <label className={styles.label}>Goal Description</label>
              <input
                type="input"
                name="goalDescription"
                value={formData.goalDescription}
                onChange={handleChange}
              />
            </div>
            <div className={styles.editContainer}>
              <label className={styles.label}>Goal Duration</label>
              <input
                type="date"
                name="goalDuration"
                value={formData.goalDuration}
                onChange={handleChange}
              />
            </div>
            <div className={styles.editContainer}>
              <label className={styles.label}>EDIT SHIT</label>
              <input
                type="color"
                name="favoriteColor"
                value={formData.favoriteColor}
                onChange={handleChange}
              /><br /><br />
            </div>
            <div className={styles.editContainer}>
              <Button3 name={"Submit"} className={styles.submit} type="submit" />
            </div>

          </form>
          <Modal className={styles.alert} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <h1>CONGRANTATION</h1><br /><p>You are one step closer to achieving ur DREAM</p>
            <div className={styles.buttonContainer}>
              <Button3
              onClick={() => handleCloseModal()}
              name={"Close"}
              />
              <ConfettiButton
                name={"Celebrate"}
                className={styles.button}
                ariaHideApp={false} />
            </div>
            {
              data.map((formData, index) => (
                <div key={index} className={styles.CContainer}>
                  <div><p>Goal Name: </p>{formData.goalName}</div>
                  <div><p>Goal Description: </p>{formData.goalDescription}</div>
                  <div><p>Goal Duration: </p>{formData.goalDuration}</div>
                  <div><p>Goal Color: </p><div style={{ backgroundColor: formData.favoriteColor, width: '20px', height: '20px', display: 'inline-block', marginRight: '5px' }}></div></div>

                </div>
              ))
            }

          </Modal>
          <NavBar />
        </main>
      </div>
    </>
  )
}