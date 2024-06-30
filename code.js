const result = await makeHttpRequest(url);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);