const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`
            <h1>Welcome to the homepage of your first server</h1>
        `)
    } else if(req.url === '/about') {
        res.end(`
            <h1>About</h1>
            <p>There is no history of this server</p>
        `)
    } else {
        res.end(`
            <h1>Error</h1>
            <p><b>Sorry!</b>We can't seem to find the requested page.</p>
            <a href="/">Back to home</a>
        `)
    }
    // res.write("Welcome to your first server");
    // res.end();
});

server.listen(5000);
