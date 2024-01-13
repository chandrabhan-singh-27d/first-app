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