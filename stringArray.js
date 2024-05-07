const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const channel = getChannel(computedAppVersion);