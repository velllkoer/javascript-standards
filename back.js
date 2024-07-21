const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};