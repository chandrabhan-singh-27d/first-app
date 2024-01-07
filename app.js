import express from "express";


const app = express();

app.get('/', (req, res) => {
    res.json([
        {
            name: "John",
            id: 1
        },
        {
            name: "Jade", 
            id: 2
        }
    ])
});

app.listen(5000, () => {
    console.log("Server listening at port 5000...");
});