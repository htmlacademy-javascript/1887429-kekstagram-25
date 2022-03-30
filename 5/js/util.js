const getRandomFromRange = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getMaxLength = (line, maxLength) => line.length <= maxLength;

const lines = 'оо';
const length = 3;
getMaxLength(lines, length);

export { getRandomFromRange };
