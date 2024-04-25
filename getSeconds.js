const copyToClipboard = (text) => navigator.clipboard.writeText(text);
var regexp  = new RegExp('{{([^}]+)}}', 'g');