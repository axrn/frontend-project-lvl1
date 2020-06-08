import { getRandomElement } from '../lib/math.js';


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

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQnA = () => {
    const maxNumber = 100;
    const primes = getPrimeNumbers(maxNumber);
    const setOfPrimes = new Set(primes);
    const oddAndNotPrimes = new Array(maxNumber)
      .fill()
      .map((e, i) => i)
      .filter((e) => e % 2 === 1)
      .filter((e) => !setOfPrimes.has(e));
    const answer = getRandomElement(['yes', 'no']);
    const number = getRandomElement(answer === 'yes' ? primes : oddAndNotPrimes);
    const question = `Question: ${number}\r\nYour answer: `;
    return [question, answer];
  };
  return { description, getQnA };
};
