const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const buildOutputPath = path.join(repositoryRootPath, 'out');