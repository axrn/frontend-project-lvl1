import { getRandomInt, getRandomElement } from '../lib/math.js';


const description = 'What is the result of the expression?';
const min = 0;
const max = 25;
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

export default () => {
  const getQnA = () => {
    const A = getRandomInt(min, max);
    const B = getRandomInt(min, max);
    const [operation, calc] = getRandomElement(operations);
    const answer = String(calc(A, B));
    const question = `${A} ${operation} ${B}`;
    return [question, answer];
  };
  return { description, getQnA };
};
