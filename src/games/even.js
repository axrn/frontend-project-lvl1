import { getRandomInt } from '../lib/utils.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 99;

const isEven = (n) => n % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomInt(min, max);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
