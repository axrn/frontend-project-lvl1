import { askUser, showToUser } from './lib/cli.js';


export default (gameConfig) => {
  const [description, getQnA] = gameConfig();
  showToUser('Welcome to the Brain Games!');
  const username = askUser('May I have your name? ');
  showToUser(`Hello, ${username}!`);
  showToUser(description);
  const roundsToWin = 3;
  let userWin = true;
  for (let round = 0; round < roundsToWin; round += 1) {
    const [question, correctAnswer] = getQnA();
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
};
