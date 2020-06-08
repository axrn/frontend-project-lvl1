import { getRandomInt, getRandomElement } from '../lib/math.js';


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
  const description = 'What number is missing in the progression?';
  const getQnA = () => {
    const length = 10;
    const [minStart, maxStart] = [1, 10];
    const start = getRandomInt(minStart, maxStart);
    const [minStep, maxStep] = [1, 10];
    const step = getRandomInt(minStep, maxStep);
    const progression = getProgression(start, step, length);
    const answer = getRandomElement(progression);
    const placeholder = '..';
    const incompliteProgression = progression.map((e) => (e === answer ? placeholder : e));
    const splitter = ' ';
    const question = `Question: ${incompliteProgression.join(splitter)}\r\nYour answer: `;
    return [question, answer];
  };
  return { description, getQnA };
};
