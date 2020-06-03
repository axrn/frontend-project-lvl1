import { getRandomInt, getRandomElement, getProgression } from '../lib/mathlib.js';


export default {
  descriptionText: 'What number is missing in the progression?',
  getQuestionAndAnswer: () => {
    const progLength = 10;
    const [minStart, maxStart] = [1, 10];
    const progStart = getRandomInt(minStart, maxStart);
    const [minStep, maxStep] = [1, 10];
    const progStep = getRandomInt(minStep, maxStep);
    const progression = getProgression(progStart, progStep, progLength);
    const answer = getRandomElement(progression);
    const placeholder = '..';
    const incompliteProgression = progression.map((e) => (e === answer ? placeholder : e));
    const splitter = ' ';
    const question = `Question: ${incompliteProgression.join(splitter)}\r\nYour answer: `;
    return [question, answer];
  },
};
