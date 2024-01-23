import express from "express";

const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timeStamp = new Date();

    console.log(method, url, timeStamp);

    next(); //this will pass the control to the next middleware which is invoking this middleware, this is important otherwise resolve the request by sending the response to the client
}

app.get('/', logger, (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    `)
});

app.get('/about', logger, (req, res) => {
    res.send(`
    <h1>About Page</h1>
    <a href="/">Back Home</a>
    `)
});



app.listen(5000, () => {
    console.log("Server listening at port 5000...");
});

// modified version


import express from "express";
import logger from "./logger.js";
import authorize from "./authorize.js";

const app1 = express();

// req => middleware => res
app1.use(logger);
app1.use('/sensitive', authorize)

/* 
- instead of using this logger middleware in every route, we can use app.use so that it is available to each of the routes. 
app.get('/', logger, (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    `)
}); 
*/

app1.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    `)
});

app1.get('/about', (req, res) => {
    res.send(`
    <h1>About Page</h1>
    <a href="/">Back Home</a>
    `)
});

app1.get('/sensitive', (req, res) => {
    res.status(200).send(`
    <p>Hello sir, kar lijiye apni manmaani</p>
    <a href="/">Back Home</a>
    `)
});



app1.listen(5000, () => {
    console.log("Server listening at port 5000...");
});