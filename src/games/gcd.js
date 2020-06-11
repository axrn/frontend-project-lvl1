import { getRandomInt } from '../lib/utils.js';


const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  const least = a < b ? a : b;
  const most = a > b ? a : b;
  for (let i = least; i > 0; i -= 1) {
    if (least % i === 0 && most % i === 0) return i;
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const A = getRandomInt(min, max);
  const B = getRandomInt(min, max);
  const answer = String(getGreatestCommonDivisor(A, B));
  const question = `${A} ${B}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
