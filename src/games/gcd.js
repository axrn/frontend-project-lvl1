import { getRandomInt, getGreatestCommonDivisor } from '../lib/mathlib.js';


export default {
  descriptionText: 'Find the greatest common divisor of given numbers.',
  getQuestionAndAnswer: () => {
    const minNumber = 1;
    const maxNumber = 100;
    const numberA = getRandomInt(minNumber, maxNumber);
    const numberB = getRandomInt(minNumber, maxNumber);
    const answer = getGreatestCommonDivisor(numberA, numberB);
    const question = `Question: ${numberA} ${numberB}\r\nYour answer: `;
    return [question, answer];
  },
};
