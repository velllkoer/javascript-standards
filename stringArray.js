const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};