const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));