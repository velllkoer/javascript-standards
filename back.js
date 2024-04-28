const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;