export const quizQuestions_2 = {
  questions: [
  {
    question: 'What does the ternary operator in JavaScript allow you to do?',
    choices: [
      'Perform arithmetic operations',
      'Make concise conditional statements',
      'Access elements in an array',
      'Create loops'
    ],
    correctAnswer: 'Make concise conditional statements'
  },
  {
    question: 'Which symbol is used to represent the ternary operator in JavaScript?',
    choices: [
      '&&',
      '?',
      ':',
      '||'
    ],
    correctAnswer: '?'
  },
  {
    question: 'In a ternary operator (condition ? expr1 : expr2), what happens if the condition is true?',
    choices: [
      'expr1 is executed',
      'expr2 is executed',
      'Both expr1 and expr2 are executed',
      'No expression is executed'
    ],
    correctAnswer: 'expr1 is executed'
  },
  {
    question: 'What is the purpose of the null coalescing operator (??) in JavaScript?',
    choices: [
      'To perform logical AND operation',
      'To handle null or undefined values by providing a default value',
      'To concatenate strings',
      'To perform bitwise operations'
    ],
    correctAnswer: 'To handle null or undefined values by providing a default value'
  },
  {
    question: 'When using the null coalescing operator (??), what value is returned if the left operand is not null or undefined?',
    choices: [
      'The left operand',
      'The right operand',
      'A boolean value',
      'An error is thrown'
    ],
    correctAnswer: 'The left operand'
  },
  {
    question: 'Which of the following statements correctly demonstrates the use of the null coalescing operator to set a default value?',
    choices: [
      'const result = value ?? defaultValue;',
      'const result = value || defaultValue;',
      'const result = value ? value : defaultValue;',
      'const result = value && defaultValue;'
    ],
    correctAnswer: 'const result = value ?? defaultValue;'
  },
  {
    question: 'Can the null coalescing operator (??) be chained for multiple fallback values?',
    choices: [
      'Yes, it can be chained indefinitely',
      'No, it only works for two values',
      'Yes, but up to three values only',
      'No, it cannot be used with multiple values'
    ],
    correctAnswer: 'No, it only works for two values'
  },
  {
    question: 'In React, how might you use the ternary operator for conditional rendering in JSX?',
    choices: [
      'By using if-else statements outside of JSX',
      'By using the && operator inside JSX',
      'By using the ? : operator inside JSX',
      'By defining separate components for each condition'
    ],
    correctAnswer: 'By using the ? : operator inside JSX'
  },
  {
    question: 'Which operator in React can be used as a fallback for rendering when dealing with null or undefined values?',
    choices: [
      'Ternary operator',
      'Logical OR operator (||)',
      'Logical AND operator (&&)',
      'Nullish coalescing operator (??)'
    ],
    correctAnswer: 'Nullish coalescing operator (??)'
  },
  {
    question: 'What is the benefit of using the nullish coalescing operator (??) over the logical OR operator (||) when handling default values?',
    choices: [
      'There is no difference, both operators function identically',
      'The nullish coalescing operator considers only null and undefined values, not falsy values like empty strings or zero',
      'The logical OR operator is more efficient in terms of performance',
      'The nullish coalescing operator can handle more complex conditions'
    ],
    correctAnswer: 'The nullish coalescing operator considers only null and undefined values, not falsy values like empty strings or zero'
    },
  ],
}




