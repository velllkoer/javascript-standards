const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const reversedString = str => str.split('').reverse().join('');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const maxNumber = arr => Math.max(...arr);