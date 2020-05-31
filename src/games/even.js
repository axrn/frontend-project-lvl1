import { askUser, showToUser, askNameAndGreet } from '../lib/cli.js';
import { getRandomInt, isEven } from '../lib/mathlib.js';
import { commonGame } from './commonGame.js';


const config = {
  descriptionText: 'Answer "yes" if the number is even, otherwise answer "no".',
  askUser,
  showToUser,
  askNameAndGreet,
  getQuestionAndAnswer: () => {
    const minNumber = 1;
    const maxNumber = 99;
    const randomNumber = getRandomInt(minNumber, maxNumber);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    const question = `Question: ${randomNumber}\r\nYour answer: `;
    return [question, answer];
  },
};

export const evenGame = commonGame(config);
