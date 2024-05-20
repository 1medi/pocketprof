import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { onboarding } from "@/quizData/onboarding";
import styles from "./page.module.css";
import Button3 from '@/Components/Buttons/Button3';
import Image from 'next/image';
import Oscar from '@/public/img/oscar/oscar-main.svg';

export default function Page() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [responses, setResponses] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [progress, setProgress] = useState(1); // Start progress at 1 instead of 0

  const routeMap = {
    'arts': {
      'video': 'arts-video',
      'article': 'arts-article'
    },
    'cs': {
      'video': 'cs-video',
      'article': 'cs-article'
    },
    'health': {
      'video': 'health-video',
      'article': 'health-article'
    }
  };

  const onAnswerSelected = (answer, idx, event = null) => {
    if (event && event.type === 'keydown' && (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }
    setChecked(true);
    setResponses(prev => [...prev, answer]);
    setSelectedAnswerIndex(idx); 
  }

  const nextQuestion = () => {
    const newQuestionIndex = activeQuestion + 1;
    setActiveQuestion(newQuestionIndex);
    setSelectedAnswerIndex(null);
    if (newQuestionIndex >= onboarding.totalQuestions) {
      setShowResult(true); 
      routeToResult();      
    }
    setChecked(false);
    // Update progress
    setProgress(newQuestionIndex + 1);
  };

  const routeToResult = () => {
    if (responses.length >= 3) {
      const interest = responses[0]?.value;
      const learningStyle = responses[2]?.value; 
  
      if (!interest || !learningStyle) {
        console.error('Required response values are missing');
        return; 
      }
  
      const route = routeMap[interest][learningStyle];
      console.log('Routing to:', route);
      router.push(route);
    }
  };

  const nextButtonRef = useRef(null);

  useEffect(() => {
    if (checked && nextButtonRef.current) {
      nextButtonRef.current.focus();
    }
  }, [checked]);

  return (
    <div className={styles.mobileContainer}>
      <main className={styles.container}>
        <div className={styles.oscarContainer}>
          <div className={styles.oscarCircle}></div>
          <Image
            className={styles.oscarImage}
            src={Oscar}
            width={256}
            height={256}
          />
        </div>
        {!showResult ? (
          <div className={styles.quizContainer}>
            <div className={styles.quizInnerContainer}>
              <h3 className={styles.question}>{onboarding.questions[activeQuestion].question}</h3>
              {onboarding.questions[activeQuestion].answers.map((answer, idx) => (
                <li key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  onKeyDown={(event) => onAnswerSelected(answer, idx, event)}
                  className={`${styles.answerList} ${selectedAnswerIndex === idx ? styles.itemSelected : styles.itemHover}`}
                  tabIndex={0}>
                  {answer.text}
                </li>
              ))}
              <button
                ref={nextButtonRef} 
                onClick={nextQuestion}
                className={checked ? styles.btn : styles.btnDisabled}
                disabled={!checked}
                tabIndex={2}>
                {activeQuestion === onboarding.totalQuestions - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : <h1>Loading Your Resources</h1>}
        <div className={styles.progressBar}>
          {[...Array(onboarding.totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={styles.step}
              style={{ opacity: index < progress ? 1 : 0 }}
            >
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
