'use client';
import React, { useState, useRef, useEffect } from 'react';
import { quiz } from "@/quizData/data"
import styles from "./page.module.css"
import Header from '@/Components/Header';
import NavBar from "@/Components/Navbar"
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import Link from 'next/link';
import Button3 from '@/Components/Buttons/Button3';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Page() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [progress, setProgress] = useState(0);

  const nextButtonRef = useRef(null); 

  const { questions } = quiz;
  const { answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx, event = null) => {
    if (event && event.type === 'keydown' && (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  
  useEffect(() => {
    if (checked && nextButtonRef.current) {
      nextButtonRef.current.focus();
    }
  }, [checked]); 

  const nextQuestion = () => {
    setProgress((prevProgress) => (prevProgress + 1) % 5); // Change 5 to the total number of nested divs
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <>
    <div className={styles.mobileContainer}>
    <main className={`${styles.container} ${montserrat.className}`}>
    <div className={styles.oscarBox}>
    <Image
      priority
      src="/img/oscar/oscar-main.svg"
      width="70"
      height="70"
      alt="oscar"
      className={styles.oscar}
    />
  </div>
      <div>
        {!showResult ? (
          <div className={styles.quizContainer}>
            <div className={styles.quizInnerContainer}>
            {!showResult && (
            <div className={styles.activeQ}>
              STEP {activeQuestion + 1}
            </div>
            )}
            <h3 className={styles.question}>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                onKeyDown={(event) => onAnswerSelected(answer, idx, event)}
                className={`${styles.answerList} ${selectedAnswerIndex === idx ? styles.itemSelected : styles.itemHover}`}
                tabIndex={0}>
                <span>{answer}</span>
              </li>
            ))}
            <button 
              ref={nextButtonRef} 
              onClick={nextQuestion} 
              className={checked ? styles.btn : styles.btnDisabled} 
              tabIndex={2}
              disabled={!checked}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
          </div>
        ) : (
          <div className={styles.quizContainer}>
             <div className={styles.quizInnerContainer}>
            <div className={styles.result}><h3 className={styles.hthree}>Searching for a course</h3></div>
            <Link href='/OnboardingResult' className={styles.buttonContainer}>
            <Button3 name={"Search"} />
            </Link>
          </div>
          </div>
        )}
      </div>
      <div className={styles.progressBar}>
          <div className={styles.step} style={{ opacity: progress >= 0 ? 1 : 0 }}><p className={styles.barText}></p></div>
          <div className={styles.step} style={{ opacity: progress >= 1 ? 1 : 0 }}><p className={styles.barText}></p></div>
          <div className={styles.step} style={{ opacity: progress >= 2 ? 1 : 0 }}><p className={styles.barText}></p></div>
          <div className={styles.step} style={{ opacity: progress >= 3 ? 1 : 0 }}><p className={styles.barText}></p></div>
          <div className={styles.step} style={{ opacity: progress >= 4 ? 1 : 0 }}><p className={styles.barText}></p></div>
      </div>
    </main>
    </div>
 
    </>

  );
};
