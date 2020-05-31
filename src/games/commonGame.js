export function commonGame({
  descriptionText,
  getQuestionAndAnswer,
  askUser,
  showToUser,
  askNameAndGreet,
}) {
  return () => {
    const username = askNameAndGreet();
    showToUser(descriptionText);
    const roundsToWin = 3;
    let roundsWon = 0;
    let state = 'GAME_RUNNING'; // GAME_RUNNING, USER_WIN, USER_LOOSE
    while (state === 'GAME_RUNNING') {
      const [question, correctAnswer] = getQuestionAndAnswer();
      const userAnswer = askUser(question);
      if (userAnswer === correctAnswer) {
        showToUser('Correct!');
        roundsWon += 1;
        if (roundsWon >= roundsToWin) {
          state = 'USER_WIN';
        }
      } else {
        showToUser(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        state = 'USER_LOOSE';
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
  };
}
