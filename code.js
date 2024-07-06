const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));