import { getRandomInt } from '../lib/utils.js';


const description = 'Find the greatest common divisor of given numbers.';

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
  for (let divisor = least; divisor > 0; divisor -= 1) {
    if (least % divisor === 0 && most % divisor === 0) return divisor;
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const answer = String(getGreatestCommonDivisor(a, b));
  const question = `${a} ${b}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
