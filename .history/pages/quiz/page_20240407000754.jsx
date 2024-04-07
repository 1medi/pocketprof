'use client';
import React, { useState } from 'react';
import { quiz } from "../data"
import styles from "./page.module.css"
import { notoSans } from "next/font/google"

const notoSans = NotoSans({ 
  weight: '400', // Specify the desired weight, if necessary
  style: 'normal', // Specify the style, if necessary
  subsets: ['latin'] // Specify any subsets, if needed
});
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

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
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

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
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
    <div className={noto.container}>
      <h1 className={styles.title}>Quiz Page</h1>
      <div>
        <h2 className={styles.activeQ}>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className={styles.quizContainer}>
            <h3 className={styles.question}>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`${styles.answerList} ${selectedAnswerIndex === idx ? styles.itemSelected : styles.itemHover}`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className={styles.btn}>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className={styles.btnDisabled}>
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.quizContainer}>
            <h3 className={styles.hthree}>Results</h3>
            <h3 className={styles.hthree}>Overall {(result.score / 25) * 100}%</h3>
            <p className={styles.paragraph}>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className={styles.paragraph}> 
              Total Score: <span>{result.score}</span>
            </p>
            <p className={styles.paragraph}>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className={styles.paragraph}>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button className={styles.btn} onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};