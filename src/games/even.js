import { getRandomInt } from '../lib/utils.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 99);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
