export const quizQuestions_6 = {
  questions: [
  {
    question: 'What is the purpose of the useEffect hook in React?',
    choices: [
      'To perform side effects in class components',
      'To handle event listeners in functional components',
      'To manage state in functional components',
      'To perform side effects in functional components'
    ],
    correctAnswer: 'To perform side effects in functional components'
  },
  {
    question: 'When does the useEffect hook run in a functional component?',
    choices: [
      'During the component rendering phase',
      'Before the component is mounted',
      'After every completed render',
      'Only when the component is first mounted'
    ],
    correctAnswer: 'After every completed render'
  },
  {
    question: 'What does the dependency array in useEffect represent?',
    choices: [
      'It contains the values returned by the useEffect hook',
      'It specifies the dependencies that trigger the effect to re-run',
      'It defines the initial state of the component',
      'It holds the cleanup functions for the effect'
    ],
    correctAnswer: 'It specifies the dependencies that trigger the effect to re-run'
  },
  {
    question: 'If the dependency array in useEffect is empty, how often will the effect run?',
    choices: [
      'It runs only once when the component mounts',
      'It runs on every render',
      'It doesn’t run at all',
      'It runs continuously in an infinite loop'
    ],
    correctAnswer: 'It runs only once when the component mounts'
  },
  {
    question: 'What is the cleanup function used for in useEffect?',
    choices: [
      'To reset the state of the component',
      'To clean up any resources or side-effects created by the effect',
      'To remove the dependency array',
      'To force a re-render of the component'
    ],
    correctAnswer: 'To clean up any resources or side-effects created by the effect'
  },
  {
    question: 'How can you conditionally execute useEffect based on a certain condition?',
    choices: [
      'By using if-else statements within the effect',
      'By returning a boolean value in the dependency array',
      'By providing a condition inside the useEffect hook',
      'By splitting the effect into multiple useEffect hooks'
    ],
    correctAnswer: 'By providing a condition inside the useEffect hook'
  },
  {
    question: 'Can useEffect replace all use cases of lifecycle methods like componentDidMount and componentDidUpdate in class components?',
    choices: [
      'Yes, useEffect can entirely replace all lifecycle methods',
      'No, useEffect can only replace componentDidMount',
      'No, useEffect cannot replace lifecycle methods',
      'Yes, but only for state-related operations'
    ],
    correctAnswer: 'Yes, useEffect can entirely replace all lifecycle methods'
  },
  {
    question: 'Which hook can be used to unsubscribe or clean up in useEffect?',
    choices: [
      'useCleanup',
      'useUnmount',
      'useEffectCleanup',
      'useEffect return function'
    ],
    correctAnswer: 'useEffect return function'
  },
  {
    question: 'What happens if useEffect returns a function?',
    choices: [
      'It throws an error',
      'The return function is executed after every render',
      'The component gets unmounted',
      'The effect stops running'
    ],
    correctAnswer: 'The return function is executed after every render'
  },
  {
    question: 'Is it possible to use async/await directly inside the useEffect callback?',
    choices: [
      'Yes, it is the recommended approach for asynchronous tasks',
      'No, async functions should be wrapped in a separate function called inside useEffect',
      'Only if the useEffect dependency array is empty',
      'Async functions are not supported in useEffect'
    ],
    correctAnswer: 'No, async functions should be wrapped in a separate function called inside useEffect'
    },
  ],
}





