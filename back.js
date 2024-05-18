const buildOutputPath = path.join(repositoryRootPath, 'out');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');