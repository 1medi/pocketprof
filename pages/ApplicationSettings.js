import Head from "next/head";
import styles from "@/styles/AppSettings.module.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/Components/Navbar";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";
import Circles from "@/Components/Shapes/Circles";
import React, { useState } from 'react';
import ColorMode from "@/Components/Popup/ColorMode/ColorMode";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function AppSettings() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FBFAFC'); 
  const [textColor, setTextColor] = useState('black');
  const [lineColor, setLineColor] = useState('var(--main-color-lightpurple')
  const [borderColor, setborderColor] = useState('black')
  const [circlesColor, setCirclesColor] = useState('var(--main-color-purple)')
  const [circleColor, setCircleColor] = useState('var(--main-color-lightpurple)')

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSaveColorMode = (mode) => {
    if (mode === 'option1') {
      setBackgroundColor('#FBFAFC');
      setTextColor('black'); 
      setLineColor('var(--main-color-lightpurple)');
      setborderColor('black');
      setCirclesColor('var(--main-color-purple)');
      setCircleColor('var(--main-color-lightpurple)');
    } else if (mode === 'option2') {
      setBackgroundColor('#2b2b2b'); 
      setTextColor('white'); 
      setLineColor('var(--secondary-color-lightblue');
      setborderColor('white')
      setCirclesColor('var(--secondary-color-lightblue)');
      setCircleColor('var(--main-color-blue)');
    }
    togglePopup();
  };


  return (
    <>
      <Head>
        <title>App Settings</title>
        <meta name="description" content="Settings on Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div 
      className={styles.mobileContainer}
      style={{ backgroundColor: backgroundColor, color: textColor }}
      >
              <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}></div>
        <Circles 
        title="App Settings" 
        style={{ backgroundColor: circlesColor, color: backgroundColor }}/>
        <main 
        className={`${styles.main} ${montserrat.className}`}
        style={{ backgroundColor: backgroundColor , color: textColor}}
        >
          <div className={styles.outerContainer}>
            <div className={styles.optionsOuter}>
              <h4 className={styles.subHeading}>Accessibility</h4>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Color Mode</p>
                <ArrowRight 
                onClick={togglePopup}
                className={styles.arrowRight}
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
                {isPopupOpen && <ColorMode onClose={togglePopup} onSave={handleSaveColorMode}/>}
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Font Options</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Color Blindness</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} /> 
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Language</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}/>
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Narrator / Voice</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Privacy</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
              </div>
              <div 
              className={styles.horizontal}
              style={{borderBottom: `1px solid ${lineColor}`}}>
              </div>
            </div>
            <div className={styles.optionsOuter}>
              <h4 className={styles.subHeading}>General</h4>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Get Help</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Rate The App</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }} />
              </div>
              <div className={styles.optionsContainer}>
                <p className={styles.description}>Log Out</p>
                <ArrowRight
                style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}/>
              </div>
            </div>
            <NavBar 
            style={{ backgroundColor: lineColor }}/>
          </div>
        </main>
      </div>
    </>
  );
};