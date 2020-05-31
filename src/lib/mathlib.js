export function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(min + max + 1));
}

export function getRandomElement(arr) {
  const randomIndex = getRandomInt(0, arr.length - 1);
  return arr[randomIndex];
}

export function getRandomOperator() {
  const operations = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    // ['/', (a, b) => a / b],
  ];
  return getRandomElement(operations);
}

export function isEven(number) {
  return number % 2 === 0;
}
