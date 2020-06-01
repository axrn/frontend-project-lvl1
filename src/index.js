import { askUser, showToUser, askNameAndGreet } from './lib/cli.js';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';


const games = {
  EVEN: evenGame,
  CALC: calcGame,
};
Object.freeze(games);

function startGame(gameConfig) {
  const { descriptionText, getQuestionAndAnswer } = gameConfig;
  const username = askNameAndGreet();
  showToUser(descriptionText);
  const roundsToWin = 3;
  let state = 'USER_WIN';
  for (let round = 0; round < roundsToWin; round += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const userAnswer = askUser(question);
    if (userAnswer === correctAnswer) {
      showToUser('Correct!');
    } else {
      showToUser(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      state = 'USER_LOOSE';
      break;
    }
  }
  switch (state) {
    case 'USER_WIN':
      showToUser(`Congratulations, ${username}!`);
      break;
    case 'USER_LOOSE':
      showToUser(`Let's try again, ${username}!`);
      break;
    default:
      throw new Error(`Unexpected state '${state}'`);
  }
}

export { games, startGame };
