const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);