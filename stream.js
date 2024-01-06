import { createReadStream } from 'fs';

const stream = createReadStream('./content/sub1/big-file.txt');
// const stream = createReadStream('./content/sub1/big-file.txt', {highWaterMark: 80000, encoding: 'utf-8'});

stream.on('data', (result) => {
    console.log(result);
});

/* 
default buffer size is 64kb
control buffer size highWaterMark
*/

import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/sub1/big-file.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => res.end(err))
}).listen(5000);

/* 
This is nothing different, the data will still be sent in a single http request but the transfer encoding will be chuked.
*/