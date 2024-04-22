export const onboarding = {
    totalQuestions: 4,
    questions: [
      {
        id: 1,
        question: 'What’s your main interest area of learning?',
        answers: [
          { text: 'Creativity (Arts)', value: 'arts' },
          { text: 'Computer Science', value: 'cs' },
          { text: 'Health', value: 'health' }
        ],
      },
      {
        id: 2,
        question: 'What is your proficiency level in the selected interest area?',
        answers: [
          { text: 'Beginner', value: 1 },
          { text: 'Intermediate', value: 2 },
          { text: 'Advanced', value: 3 }
        ],
      },
      {
        id: 3,
        question: 'What is your preferred learning style?',
        answers: [
          { text: 'Video Watching', value: 'video' },
          { text: 'Article Reading', value: 'article' },
        ],
      },
      {
        id: 4,
        question: 'Tell us your preferred learning time?',
        answers: [
          { text: 'Less than 30 min', value: 'short' },
          { text: '30 min to 1 hour', value: 'medium' },
          { text: 'More than an hour', value: 'long' }
        ],
      }
    ],
  };
