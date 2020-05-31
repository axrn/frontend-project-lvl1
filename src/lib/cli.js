import readlineSync from 'readline-sync';


export function showToUser(msg) {
  return console.log(msg);
}

export function askUser(question) {
  return readlineSync.question(question);
}

export function askNameAndGreet() {
  showToUser('Welcome to the Brain Games!');
  const userName = askUser('May I have your name? ');
  showToUser(`Hello, ${userName}!`);
  return userName;
}
