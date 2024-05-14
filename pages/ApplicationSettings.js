import Head from "next/head";
import styles from "@/styles/AppSettings.module.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/Components/Navbar";
import ArrowRight from "@/Components/Shapes/Arrows/ArrowRight";
import Circles from "@/Components/Shapes/Circles";
import React, { useState } from 'react';
import ColorMode from "@/Components/Popup/ColorMode/ColorMode";
import FontSize from "@/Components/Popup/FontSize/FontSize";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function AppSettings() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFontSizePopupOpen, setIsFontSizePopupOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FBFAFC');
  const [textColor, setTextColor] = useState('black');
  const [lineColor, setLineColor] = useState('var(--main-color-lightpurple');
  const [borderColor, setBorderColor] = useState('black');
  const [circlesColor, setCirclesColor] = useState('var(--main-color-purple)');
  const [baseFontSize, setBaseFontSize] = useState('1.1em');
  const [subHeadingFontSize, setSubHeadingFontSize] = useState('1.4em');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleFontSizePopup = () => {
    setIsFontSizePopupOpen(!isFontSizePopupOpen);
  };

  const handleSaveColorMode = (mode) => {
    if (mode === 'option1') {
      setBackgroundColor('#FBFAFC');
      setTextColor('black');
      setLineColor('var(--main-color-lightpurple)');
      setBorderColor('black');
      setCirclesColor('var(--main-color-purple)');
    } else if (mode === 'option2') {
      setBackgroundColor('#2b2b2b');
      setTextColor('white');
      setLineColor('var(--secondary-color-lightblue)');
      setBorderColor('white');
      setCirclesColor('var(--secondary-color-lightblue)');
    }
    togglePopup();
  };

  const handleSaveFontSize = (size) => {
    const fontSizeMap = {
      small: '0.9em',
      medium: '1.1em',
      large: '1.4em'
    };
    const subHeadingSizeMap = {
      small: '1.2em',
      medium: '1.4em',
      large: '1.7em'
    };

    setBaseFontSize(fontSizeMap[size]);
    setSubHeadingFontSize(subHeadingSizeMap[size]);
    toggleFontSizePopup();
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
        tabIndex={0}
      >
        <Circles
          title="App Settings"
          style={{ backgroundColor: circlesColor, color: backgroundColor}}
          tabIndex={1}
        />
        <main
          className={`${styles.main} ${montserrat.className}`}
          style={{ backgroundColor: backgroundColor, color: textColor }}
          tabIndex={2}
        >
          <div className={styles.outerContainer}>
            <div className={styles.optionsOuter}>
              <h4
                className={styles.subHeading}
                style={{ fontSize: subHeadingFontSize }}
                tabIndex={3}
              >
                Accessibility
              </h4>
              <div className={styles.optionsContainer}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                  tabIndex={4}
                >
                  Color Mode
                </p>
                <ArrowRight
                  onClick={togglePopup}
                  tabIndex={5}
                  className={styles.arrowRight}
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
                {isPopupOpen &&
                  <ColorMode
                    onClose={togglePopup}
                    onSave={handleSaveColorMode}
                    style={{ backgroundColor: backgroundColor, color: textColor, fontSize: baseFontSize }}
                  />
                }
              </div>
              <div className={styles.optionsContainer}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                  tabIndex={6}
                >
                  Font Options
                </p>
                <ArrowRight
                  onClick={toggleFontSizePopup}
                  tabIndex={7}
                  className={styles.arrowRight}
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
                {isFontSizePopupOpen &&
                  <FontSize
                    onClose={toggleFontSizePopup}
                    onSave={handleSaveFontSize}
                    style={{ backgroundColor: backgroundColor, color: textColor, fontSize: baseFontSize }}
                  />
                }
              </div>
              <div className={styles.optionsContainer} tabIndex={8}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Color Blindness
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div className={styles.optionsContainer} tabIndex={9}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Language
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div className={styles.optionsContainer} tabIndex={10}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Narrator / Voice
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div className={styles.optionsContainer} tabIndex={11}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Privacy
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div
                className={styles.horizontal}
                style={{ borderBottom: `1px solid ${lineColor}` }}
              >
              </div>
            </div>
            <div className={styles.optionsOuter}>
              <h4
                className={styles.subHeading}
                style={{ fontSize: subHeadingFontSize }}
                tabIndex={12}
              >
                General
              </h4>
              <div className={styles.optionsContainer} tabIndex={13}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Get Help
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div className={styles.optionsContainer} tabIndex={14}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Rate The App
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
              <div className={styles.optionsContainer} tabIndex={15}>
                <p
                  className={styles.description}
                  style={{ fontSize: baseFontSize }}
                >
                  Log Out
                </p>
                <ArrowRight
                  style={{ borderRight: `3px solid ${borderColor}`, borderBottom: `3px solid ${borderColor}` }}
                />
              </div>
            </div>
            <NavBar
              style={{ backgroundColor: lineColor }}
              tabIndex={16}
            />
          </div>
        </main>
      </div>
    </>
  );
}
