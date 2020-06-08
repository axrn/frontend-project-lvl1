export const getRandomInt = (min, max) => {
  const random = min + Math.random() * Math.floor(max - min + 1);
  return Math.floor(random);
};

export const getRandomElement = (arr) => {
  const randomIndex = getRandomInt(0, arr.length - 1);
  return arr[randomIndex];
};
