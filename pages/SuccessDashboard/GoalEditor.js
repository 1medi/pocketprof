import styles from "@/styles/GoalEditor.module.css"
import NavBar from "@/Components/Navbar"
import Circles from "@/Components/Shapes/Circles"
import { useEffect, useState } from 'react';
import Button3 from "@/Components/Buttons/Button3";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function GoalEditor() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { goalName } = router.query;
  const [formData, setFormData] = useState({
    goalName: goalName || "", // Pre-fill the input field with the goalName from the query parameter
    goalDescription: "",
    goalDuration: "",
    favoriteColor: "#ff0000",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      goalName: goalName || "", // Update formData.goalName whenever goalName changes
    }));
  }, [goalName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    console.log("Form Data:", formData); 
    console.log("Goal Name:", formData.goalName); // Add this line to check the value of goalName
    router.push("/SuccessDashboard/GoalTracking", { query: { goalName: formData.goalName } });
  };

  return (
    <>
      <Head>
        <title>Goal Editor</title>
        <meta name="description" content="You edit goals here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileContainer}>
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
          <NavBar />
        </main>
      </div>
    </>
  )
}