import express from 'express';

const app = express();

// Handling GET requests
app.get('/', (req, res) => {
    res.status(200).send("<h1>Home Page</h1>")
});
app.get('/about', (req, res) => {
    res.status(200).send("<h1>About Page</h1>")
});

//Handling all the errors
app.all('*', (req, res) => {
    res.status(404).send("<h1>Oops! Resource not found.</h1>")
})

// app.use()

app.listen(5000, () => {
    console.log("Server is listening at port 5000...");
});