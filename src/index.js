import readlineSync from 'readline-sync';


export default (gameConfig) => {
  const { description, getQnA } = gameConfig();
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);
  const roundsToWin = 3;
  let userWin = true;
  for (let round = 0; round < roundsToWin; round += 1) {
    const [question, correctAnswer] = getQnA();
    const userAnswer = readlineSync.question(question);
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      userWin = false;
      break;
    }
  }
  if (userWin) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};
