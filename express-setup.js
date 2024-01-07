// Importing modules
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//resolving the __dirname and the __filename global variables for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Instantiating the express app
const app = express();

// Setting up the middleware and static assets
app.use(express.static('./public'))

// Handling the client requests
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./index.html"))
});

// Handling errors
app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, "./error.html"));
})

// Listening the app
app.listen(5000, () => {
    console.log("Server listening at port 5000")
})