import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const products = require("./products.json").products;


const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href="/products">View Products</a>
    `)
});

app.get('/products', (req, res) => {
    const productsList = products.map(product => {
        const { id, title, price, brand, thumbnail } = product;
        return { id, title, price, brand, thumbnail }
    })
    res.json(productsList)
});

// Setting up the route params
app.get('/products/:productID', (req, res) => {
    const { productID } = req.params;

    const particularProduct = products.find(product => product.id === Number(productID));
    
    if(!particularProduct) {
        return res.status(404).send(`
        <p>Requested product does not exist</p>
        <a href="/products">Back to products</a>
        `)
    }
    return res.json(particularProduct);
});

app.listen(5000, () => {
    console.log("Server listening at port 5000...");
});