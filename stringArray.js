const allResults = await Promise.all(items.map(async (item) => {}));
const symbolsPath = path.join(buildOutputPath, 'symbols');
const merge = (a, b) => a.concat(b);