import { getRandomElement, getPrimeNumbers } from '../lib/mathlib.js';


export default {
  descriptionText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer: () => {
    const maxNumber = 100;
    const primeNumbers = getPrimeNumbers(maxNumber);
    const setOfPrimes = new Set(primeNumbers);
    const oddAndNotPrimes = new Array(maxNumber)
      .fill()
      .map((e, i) => i)
      .filter((e) => e % 2 === 1)
      .filter((e) => !setOfPrimes.has(e));
    const answer = getRandomElement(['yes', 'no']);
    const number = getRandomElement(answer === 'yes' ? primeNumbers : oddAndNotPrimes);
    const question = `Question: ${number}\r\nYour answer: `;
    return [question, answer];
  },
};
