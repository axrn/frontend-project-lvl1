import { getRandomInt } from '../lib/utils.js';


const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  if (absA === 0 && absB === 0) {
    throw new Error('GCD(0, 0) is not defined!');
  }
  if (absA === 0) return absB;
  if (absB === 0) return absA;
  const least = Math.min(absA, absB);
  const most = Math.max(absA, absB);
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
