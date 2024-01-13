import express from "express";
import logger from "./logger.js";
import authorize from "./authorize.js";

const app = express();

// req => middleware => res
app.use(logger);
app.use('/sensitive', authorize)

/* 
- instead of using this logger middleware in every route, we can use app.use so that it is available to each of the routes. 
app.get('/', logger, (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    `)
}); 
*/

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    `)
});

app.get('/about', (req, res) => {
    res.send(`
    <h1>About Page</h1>
    <a href="/">Back Home</a>
    `)
});

app.get('/sensitive', (req, res) => {
    res.status(200).send(`
    <p>Hello sir, kar lijiye apni manmaani</p>
    <a href="/">Back Home</a>
    `)
});



app.listen(5000, () => {
    console.log("Server listening at port 5000...");
});