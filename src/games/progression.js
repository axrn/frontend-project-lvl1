import { getRandomInt } from '../lib/utils.js';


const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const placeholder = '..';
const separator = ' ';

const getProgression = (start, step, length) => {
  if (length < 1) return [];
  const progression = [start];
  while (progression.length < length) {
    const prev = progression[progression.length - 1];
    const current = prev + step;
    progression.push(current);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(start, step, lengthOfProgression);
  const missingIndex = getRandomInt(0, progression.length - 1);
  const missing = progression.splice(missingIndex, 1, placeholder);
  const answer = String(missing);
  const question = progression.join(separator);
  return [question, answer];
};

export default () => ({ description, getQuestionAndAnswer });
