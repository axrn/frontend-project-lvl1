import readlineSync from 'readline-sync';

import { getRandomInt, isEven } from './mathlib.js';

const minNumber = 1;
const maxNumber = 99;

export default {
  descriptionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  roundsToWin: 3,
  showToUser: console.log,
  askUser: readlineSync.question,
  getQuestionAndAnswer: () => {
    const randomNumber = getRandomInt(minNumber, maxNumber);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    const question = `Question: ${randomNumber}\r\nYour answer: `;
    return [question, answer];
  },
};
