const {readFileSync, writeFileSync} = require('fs');


writeFileSync('./content/sub2/sample.txt', "Hi, this file is created using fs module \n", {flag: 'a'});

const readContent = readFileSync('./content/sub2/sample.txt', 'utf-8');

console.log(readContent);