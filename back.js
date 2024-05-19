const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));