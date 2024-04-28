const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
console.log(false == '0');