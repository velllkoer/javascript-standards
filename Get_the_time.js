const resultingPromises = urls.map((url) => makHttpRequest(url));
const uniqueArray = arr => [...new Set(arr)];