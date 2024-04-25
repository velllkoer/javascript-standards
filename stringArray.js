var DELIM_SIZE = 4;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const appName = getAppName(channel);
const getRandomBoolean = () => Math.random() >= 0.5;