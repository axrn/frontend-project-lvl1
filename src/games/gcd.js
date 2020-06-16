import { getRandomInt } from '../lib/utils.js';


const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (a === 0 && b === 0) {
    throw new Error('GCD(0, 0) is not defined!');
  }
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const least = Math.min(absA, absB);
  for (let divisor = least; divisor > 0; divisor -= 1) {
    if (a % divisor === 0 && b % divisor === 0) return divisor;
  }
  return absA + absB;
};

const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const answer = String(getGreatestCommonDivisor(a, b));
  const question = `${a} ${b}`;
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
