import { getRandomInt } from '../lib/math.js';


const isEven = (number) => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQnA = () => {
    const minNumber = 1;
    const maxNumber = 99;
    const number = getRandomInt(minNumber, maxNumber);
    const answer = isEven(number) ? 'yes' : 'no';
    const question = `Question: ${number}\r\nYour answer: `;
    return [question, answer];
  };
  return { description, getQnA };
};
