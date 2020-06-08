import { getRandomInt, getRandomElement } from '../lib/math.js';


export default () => {
  const description = 'What is the result of the expression?';
  const getQnA = () => {
    const minNumber = 0;
    const maxNumber = 25;
    const numberA = getRandomInt(minNumber, maxNumber);
    const numberB = getRandomInt(minNumber, maxNumber);
    const operations = [
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
      ['*', (a, b) => a * b],
    ];
    const [opStr, opFunc] = getRandomElement(operations);
    const answer = opFunc(numberA, numberB);
    const question = `Question: ${numberA} ${opStr} ${numberB}\r\nYour answer: `;
    return [question, answer];
  };
  return [description, getQnA];
};
