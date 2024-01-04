const {readFile, writeFile} = require('fs');

writeFile('./content/sub2/sample2.txt', "Hi, this file is created using fs asynchronously. \n",{flag: 'a'} , (err, res) => {
    if(err) {
        console.log(err);
        return;
    }
})

readFile('./content/sub2/sample2.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    } 
    console.log(result);
});