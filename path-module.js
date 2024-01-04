const path = require('path');

const separator = path.sep;
console.log("path separator", separator);

const filePath = path.join('/content', 'sub1', 'test.txt');
console.log("file path", filePath);

const baseName = path.basename(filePath);
console.log("base name", baseName);

const absolutePath = path.resolve(__dirname, 'content', 'sub1', 'test.txt');
console.log("resolved absolute path", absolutePath);