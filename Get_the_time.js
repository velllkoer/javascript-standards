const reversedString = str => str.split('').reverse().join('');
const getRandomBoolean = () => Math.random() >= 0.5;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');