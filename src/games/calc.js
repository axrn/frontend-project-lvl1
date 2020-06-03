import { getRandomInt, getRandomElement } from '../lib/mathlib.js';


export default {
  descriptionText: 'What is the result of the expression?',
  getQuestionAndAnswer: () => {
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
  },
};
