export function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min + 1));
}

export function getRandomElement(arr) {
  const randomIndex = getRandomInt(0, arr.length - 1);
  return arr[randomIndex];
}

export function isEven(number) {
  return number % 2 === 0;
}

export function getGreatestCommonDivisor(a, b) {
  const getDivisors = (number) => {
    const divisors = [];
    for (let i = 0; i <= number; i += 1) {
      if (number % i === 0) divisors.push(i);
    }
    return divisors;
  };
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
    const prev = progression[progression.length - 1];
    const current = prev + step;
    progression.push(current);
  }
  return progression;
}

export function getPrimeNumbers(maxN) {
  const arr = new Array(maxN + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j < arr.length; j += i) arr[j] = false;
    }
  }
  return arr
    .map((e, i) => (e ? i : e))
    .filter((e) => e);
}
