export const quizQuestions_5 = {
  questions: [
  {
    question: 'What is a state in React?',
    choices: [
      'A JavaScript object that stores global variables',
      'A feature exclusive to class components for managing data',
      'A built-in data structure used to store component-specific mutable data',
      'A variable declared using the `useState` hook'
    ],
    correctAnswer: 'A built-in data structure used to store component-specific mutable data'
  },
  {
    question: 'Which hook is used to manage state in functional components?',
    choices: [
      'useReducer',
      'useEffect',
      'useState',
      'useContext'
    ],
    correctAnswer: 'useState'
  },
  {
    question: 'Why is it important to manage state in React?',
    choices: [
      'To store static data in components',
      'To make components easier to write',
      'To make components more complex',
      'To handle dynamic data that changes during component execution'
    ],
    correctAnswer: 'To handle dynamic data that changes during component execution'
  },
  {
    question: 'What is the correct way to update state in a class component?',
    choices: [
      'Using the `setState` method',
      'Directly modifying the state object',
      'Using the `updateState` method',
      'Calling the `changeState` function'
    ],
    correctAnswer: 'Using the `setState` method'
  },
  {
    question: 'In functional components, how is state updated using the `useState` hook?',
    choices: [
      'By directly assigning a new value to the state variable',
      'By calling a method provided by the hook to update the state',
      'State cannot be updated in functional components',
      'By using Redux to manage state'
    ],
    correctAnswer: 'By calling a method provided by the hook to update the state'
  },
  {
    question: 'What is the purpose of the initial value passed to the `useState` hook?',
    choices: [
      'To define the maximum value for the state',
      'To specify the data type of the state',
      'To initialize the state with a default value',
      'To prevent the state from being modified'
    ],
    correctAnswer: 'To initialize the state with a default value'
  },
  {
    question: 'When using the `setState` method to update state in a class component, is the state change synchronous or asynchronous?',
    choices: [
      'Synchronous',
      'Asynchronous',
      'Depends on the complexity of the state change',
      'Only applies to functional components, not class components'
    ],
    correctAnswer: 'Asynchronous'
  },
  {
    question: 'Can you use multiple state variables in a single functional component using the `useState` hook?',
    choices: [
      'Yes, but it requires using multiple `useState` hooks',
      'No, functional components only support a single state variable',
      'Yes, by passing an array of values to `useState`',
      'Only class components support multiple state variables'
    ],
    correctAnswer: 'Yes, but it requires using multiple `useState` hooks'
  },
  {
    question: 'What happens when you call the state update function multiple times in a functional component?',
    choices: [
      'It updates the state with the last called value only',
      'It updates the state with all the values passed to it',
      'It throws an error for multiple state updates',
      'It does not update the state'
    ],
    correctAnswer: 'It updates the state with the last called value only'
  },
  {
    question: 'Is the state in React accessible from child components by default?',
    choices: [
      'Yes, it is automatically accessible',
      'No, it is encapsulated and not directly accessible from child components',
      'Only if the parent explicitly passes it down as props',
      'State can be accessed only in class components'
    ],
    correctAnswer: 'No, it is encapsulated and not directly accessible from child components'
    },
  ],
}






