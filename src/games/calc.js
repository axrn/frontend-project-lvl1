import { getRandomInt, getRandomOperator } from '../lib/mathlib.js';


export default {
  descriptionText: 'What is the result of the expression?',
  getQuestionAndAnswer: () => {
    const minNumber = 0;
    const maxNumber = 25;
    const operand1 = getRandomInt(minNumber, maxNumber);
    const operand2 = getRandomInt(minNumber, maxNumber);
    const [opStr, opFunc] = getRandomOperator();
    const answer = String(opFunc(operand1, operand2));
    const question = `Question: ${operand1} ${opStr} ${operand2}\r\nYour answer: `;
    return [question, answer];
  },
};
