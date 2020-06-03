import { askUser, showToUser, askNameAndGreet } from './lib/cli.js';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';
import progressionGame from './games/progression.js';
import primeGame from './games/prime.js';


export const games = {
  EVEN: evenGame,
  CALC: calcGame,
  GCD: gcdGame,
  PROGRESSION: progressionGame,
  PRIME: primeGame,
};
Object.freeze(games);

export function startGame(gameConfig) {
  const { descriptionText, getQuestionAndAnswer } = gameConfig;
  const username = askNameAndGreet();
  showToUser(descriptionText);
  const roundsToWin = 3;
  let userWin = true;
  for (let round = 0; round < roundsToWin; round += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const userAnswer = askUser(question);
    if (String(userAnswer) === String(correctAnswer)) {
      showToUser('Correct!');
    } else {
      showToUser(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      userWin = false;
      break;
    }
  }
  if (userWin) {
    showToUser(`Congratulations, ${username}!`);
  } else {
    showToUser(`Let's try again, ${username}!`);
  }
}
