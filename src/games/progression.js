import { getRandomInt, getProgression } from '../lib/mathlib.js';


export default {
  descriptionText: 'What number is missing in the progression?',
  getQuestionAndAnswer: () => {
    const progLength = 10;
    const [minStart, maxStart] = [1, 10];
    const progStart = getRandomInt(minStart, maxStart);
    const [minStep, maxStep] = [1, 10];
    const progStep = getRandomInt(minStep, maxStep);
    const progression = getProgression(progStart, progStep, progLength);
    const answerElementIndex = getRandomInt(1, progLength - 2); // except first/last for gameplay
    const incompliteProgression = progression.map((e, i) => (i === answerElementIndex ? '..' : e));
    const answer = progression[answerElementIndex];
    const question = `Question: ${incompliteProgression.join(' ')}\r\nYour answer: `;
    return [question, answer];
  },
};
