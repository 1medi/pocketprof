import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { onboarding } from "@/quizData/onboarding";
import styles from "./page.module.css";
import Button3 from '@/Components/Buttons/Button3';
import Link from 'next/link';

export default function Page() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [responses, setResponses] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  // Routing map based on interest area and proficiency
  const routeMap = {
    'arts': {
      1: 'arts-video',
      2: 'arts-article'
    },
    'cs': {
      1: 'cs-video',
      2: 'cs-article'
    },
    'health': {
      1: 'health-video',
      2: 'health-article'
    }
  };

  const onAnswerSelected = (answer) => {
    setResponses(prev => [...prev, answer]); 
  };

  const nextQuestion = () => {
    if (activeQuestion < onboarding.totalQuestions - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
      routeToResult();
    }
  };

  const routeToResult = () => {
    if (responses.length >= 2) {
      const interest = responses[0].value;
      const proficiency = responses[1].value;
      const route = routeMap[interest][proficiency];
      router.push(route);
    }
  };

  return (
    <div className={styles.mobileContainer}>
      <main className={styles.container}>
        {!showResult ? (
          <div className={styles.quizContainer}>
            <div className={styles.quizInnerContainer}>
              <h3 className={styles.question}>{onboarding.questions[activeQuestion].question}</h3>
              {onboarding.questions[activeQuestion].answers.map((answer, idx) => (
                <li key={idx}
                    onClick={() => onAnswerSelected(answer)}
                    className={styles.answerList}
                    tabIndex={0}>
                  {answer.text}
                </li>
              ))}
              <button onClick={nextQuestion}
                      className={styles.btn}>
                {activeQuestion === onboarding.totalQuestions - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
            <h3>Quiz Completed</h3>
            <Button3 name="Finish" onClick={routeToResult} />

          </div>
        )}
      </main>
    </div>
  );
}
