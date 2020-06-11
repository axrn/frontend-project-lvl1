import { getRandomElement } from '../lib/math.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const max = 100;

const getPrimeNumbers = (maxN) => {
  const arr = new Array(maxN + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j < arr.length; j += i) arr[j] = false;
    }
  }
  return arr
    .map((e, i) => (e ? i : e))
    .filter((e) => e);
};

const getOddAndNotPrimes = (maxN, primes) => {
  const setOfPrimes = new Set(primes);
  return new Array(maxN)
    .fill()
    .map((e, i) => i)
    .filter((e) => e % 2 === 1)
    .filter((e) => !setOfPrimes.has(e));
};

export default () => {
  const getQnA = () => {
    const primes = getPrimeNumbers(max);
    const oddAndNotPrimes = getOddAndNotPrimes(max, primes);
    const answer = getRandomElement(['yes', 'no']);
    const number = getRandomElement(answer === 'yes' ? primes : oddAndNotPrimes);
    const question = `${number}`;
    return [question, answer];
  };
  return { description, getQnA };
};
