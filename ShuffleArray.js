const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const randomBoolean = () => Math.random() >= 0.5;