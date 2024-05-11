const uniqueArray = arr => [...new Set(arr)];
const flattenedArray = arr => [].concat(...arr);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;