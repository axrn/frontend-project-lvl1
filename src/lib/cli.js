import readlineSync from 'readline-sync';


export function showToUser(msg) {
  return console.log(msg);
}

export function askUser(question) {
  return readlineSync.question(question);
}
