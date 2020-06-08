import { getRandomInt } from '../lib/math.js';


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
  const description = 'Find the greatest common divisor of given numbers.';
  const getQnA = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const numberA = getRandomInt(minNumber, maxNumber);
    const numberB = getRandomInt(minNumber, maxNumber);
    const answer = getGreatestCommonDivisor(numberA, numberB);
    const question = `Question: ${numberA} ${numberB}\r\nYour answer: `;
    return [question, answer];
  };
  return { description, getQnA };
};
