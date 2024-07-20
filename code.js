const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);