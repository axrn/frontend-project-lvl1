export const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];
