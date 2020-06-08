import { getRandomElement, getPrimeNumbers } from '../lib/math.js';


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
  return [description, getQnA];
};
