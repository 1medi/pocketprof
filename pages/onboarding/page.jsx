import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { onboarding } from "@/quizData/onboarding";
import styles from "./page.module.css";
import Button3 from '@/Components/Buttons/Button3';

export default function Page() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [responses, setResponses] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  // Routing map based on interest area and learning style
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

  const onAnswerSelected = (answer) => {
    setResponses(prev => [...prev, answer]); 
  };

  const nextQuestion = () => {
    const newQuestionIndex = activeQuestion + 1;
    setActiveQuestion(newQuestionIndex);
    
    // Check if all questions have been answered
    if (newQuestionIndex >= onboarding.totalQuestions) {
      setShowResult(true);  // Prepare to show result page
      routeToResult();       // Route based on responses to questions 1 and 3
    }
  };

  const routeToResult = () => {
    if (responses.length >= 3) {
      const interest = responses[0].value; // response to first question
      const learningStyle = responses[2].value; // response to third question
      const route = routeMap[interest][learningStyle];
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
            <Button3 name="Finish" onClick={() => setShowResult(false)} />
          </div>
        )}
      </main>
    </div>
  );
}
