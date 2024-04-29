import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { onboarding } from "@/quizData/onboarding";
import styles from "./page.module.css";
import Button3 from '@/Components/Buttons/Button3';

export default function Page() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [responses, setResponses] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

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
  };

  const routeToResult = () => {
    if (responses.length >= 3) {
      const interest = responses[0].value; 
      const learningStyle = responses[2].value; 
      const route = routeMap[interest][learningStyle];
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
        ) : (
          <div className={styles.result}>
            <h3>Quiz Completed</h3>
            <Button3 name="Home" onClick={() => setShowResult(false)} />
          </div>
        )}
      </main>
    </div>
  );
}