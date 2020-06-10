import readlineSync from 'readline-sync';


const roundsToWin = 3;

export default (gameConfig) => {
  const { description, getQnA } = gameConfig();
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(description);
  for (let round = 0; round < roundsToWin; round += 1) {
    const [question, correctAnswer] = getQnA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
