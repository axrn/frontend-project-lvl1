import { getRandomInt } from '../lib/utils.js';


const description = 'What is the result of the expression?';
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getQuestionAndAnswer = () => {
  const a = getRandomInt(0, 25);
  const b = getRandomInt(0, 25);
  const operationIndex = getRandomInt(0, operations.length - 1);
  const [operation, calculate] = operations[operationIndex];
  const answer = String(calculate(a, b));
  const question = `${a} ${operation} ${b}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
