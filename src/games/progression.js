import { getRandomInt, getRandomElement } from '../lib/math.js';


const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const [minStart, maxStart] = [1, 10];
const [minStep, maxStep] = [1, 10];
const placeholder = '..';
const splitter = ' ';

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

export default () => {
  const getQnA = () => {
    const start = getRandomInt(minStart, maxStart);
    const step = getRandomInt(minStep, maxStep);
    const progression = getProgression(start, step, lengthOfProgression);
    const missing = getRandomElement(progression);
    const incompliteProgression = progression.map((e) => (e === missing ? placeholder : e));
    const answer = String(missing);
    const question = `${incompliteProgression.join(splitter)}`;
    return [question, answer];
  };
  return { description, getQnA };
};
