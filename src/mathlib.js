export function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(min + max + 1));
}

export function isEven(number) {
  return number % 2 === 0;
}
