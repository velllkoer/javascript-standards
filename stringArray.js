const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
function myAPITS(someString: string, someNum: number) { ... };
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);