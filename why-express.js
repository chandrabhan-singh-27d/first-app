import http from 'http';
import { readFileSync } from 'fs';


const homePage = readFileSync('./index.html'); 
const errorPage = readFileSync('./error.html'); 

const server = http.createServer((req,res) => {    
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(homePage);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(errorPage);
        res.end();
    }
});

server.listen(5000);

/* 
The problem with creating a server and serving the files using the http module is that if we have resources and assets that need to be seved then for each request we need to resolve them by checking the request url and then importing them to the app file and writing in the response just as we do with different page requests.

To tackle the problem we need to setup the express, a node framework that will help us in spinning up those things really fast.
*/
