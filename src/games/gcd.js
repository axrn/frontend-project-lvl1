import { getRandomInt } from '../lib/math.js';


const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  const getDivisors = (number) => {
    const divisors = [];
    for (let i = 0; i <= number; i += 1) {
      if (number % i === 0) divisors.push(i);
    }
    return divisors;
  };
  const setDivA = new Set(getDivisors(a));
  const revDivB = getDivisors(b).reverse();
  let gcd = 1;
  for (let i = 0; i < revDivB.length; i += 1) {
    const divisor = revDivB[i];
    if (setDivA.has(divisor)) {
      gcd = divisor;
      break;
    }
  }
  return gcd;
};

export default () => {
  const getQnA = () => {
    const numberA = getRandomInt(min, max);
    const numberB = getRandomInt(min, max);
    const answer = String(getGreatestCommonDivisor(numberA, numberB));
    const question = `${numberA} ${numberB}`;
    return [question, answer];
  };
  return { description, getQnA };
};
