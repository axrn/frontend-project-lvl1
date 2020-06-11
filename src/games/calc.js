import { getRandomInt } from '../lib/utils.js';


const description = 'What is the result of the expression?';
const min = 0;
const max = 25;
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getQuestionAndAnswer = () => {
  const A = getRandomInt(min, max);
  const B = getRandomInt(min, max);
  const operationIndex = getRandomInt(0, operations.length - 1);
  const [operation, calc] = operations[operationIndex];
  const answer = String(calc(A, B));
  const question = `${A} ${operation} ${B}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
