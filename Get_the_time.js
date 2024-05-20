const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
var regexp  = new RegExp('{{([^}]+)}}', 'g');