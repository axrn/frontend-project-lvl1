export function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min + 1));
}

function getRandomElement(arr) {
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

function getDivisors(number) {
  const divisors = [];
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) divisors.push(i);
  }
  return divisors;
}

export function getGreatestCommonDivisor(a, b) {
  const setDivA = new Set(getDivisors(a));
  const revDivB = getDivisors(b).reverse();
  let gcd = 1;
  for (let i = 0; i < revDivB.length; i += 1) {
    const divisor = revDivB[i];
    if (setDivA.has(divisor)) {
      gcd = divisor;
      break;
    }
  }
  return gcd;
}

export function getProgression(start, step, length) {
  if (length < 1) return [];
  const progression = [start];
  while (progression.length < length) {
    const e = progression[progression.length - 1] + step;
    progression.push(e);
  }
  return progression;
}
