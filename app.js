import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const people = require("./people.json");

const app = express();


app.get('/people', (req, res) => {
    let requestedPeople = [...people];
    const { limit } = req.query;

    requestedPeople = requestedPeople.slice(0, Number(limit));

    res.status(200).json(requestedPeople);
})

app.listen(5000, () => console.log("server listening on port 5000")); 