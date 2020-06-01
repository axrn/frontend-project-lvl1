import { getRandomInt, isEven } from '../lib/mathlib.js';


export default {
  descriptionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionAndAnswer: () => {
    const minNumber = 1;
    const maxNumber = 99;
    const randomNumber = getRandomInt(minNumber, maxNumber);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    const question = `Question: ${randomNumber}\r\nYour answer: `;
    return [question, answer];
  },
};
