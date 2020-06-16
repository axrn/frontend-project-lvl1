import { getRandomInt } from '../lib/utils.js';


const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const placeholder = '..';
const separator = ' ';

const getProgression = (firstElement, step, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    const current = firstElement + step * index;
    progression.push(current);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(firstElement, step, lengthOfProgression);
  const missingIndex = getRandomInt(0, progression.length - 1);
  const missing = progression.splice(missingIndex, 1, placeholder);
  const answer = String(missing);
  const question = progression.join(separator);
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
