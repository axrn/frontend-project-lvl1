import { getRandomInt, isEven } from '../lib/math.js';


export default {
  descriptionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionAndAnswer: () => {
    const minNumber = 1;
    const maxNumber = 99;
    const number = getRandomInt(minNumber, maxNumber);
    const answer = isEven(number) ? 'yes' : 'no';
    const question = `Question: ${number}\r\nYour answer: `;
    return [question, answer];
  },
};
