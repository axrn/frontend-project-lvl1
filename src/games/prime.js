import { getRandomInt } from '../lib/utils.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const isPrime = (n) => {
  if (n < 2) return false;
  for (let divisor = 2; divisor <= Math.sqrt(n); divisor += 1) {
    if (n % divisor === 0) return false;
  }
  return true;
};

const getRandomPrime = (maxN) => {
  let n = getRandomInt(2, maxN);
  while (!isPrime(n)) {
    n = getRandomInt(2, maxN);
  }
  return n;
};

const getRandomOddNotPrime = (maxN) => {
  let n = getRandomInt(0, maxN);
  while (isPrime(n) || isEven(n)) {
    n = getRandomInt(0, maxN);
  }
  return n;
};

const getQuestionAndAnswer = () => {
  const answer = getRandomInt(0, 1) === 0 ? 'yes' : 'no';
  const number = answer === 'yes' ? getRandomPrime(100) : getRandomOddNotPrime(100);
  const question = String(number);
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
