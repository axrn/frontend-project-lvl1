import { getRandomInt } from '../lib/utils.js';


const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  if (a === 0 && b === 0) {
    throw new Error('GCD(0, 0) is not defined!');
  }
  if (a === 0) return b;
  if (b === 0) return a;
  const least = Math.min(a, b);
  const most = Math.max(a, b);
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
