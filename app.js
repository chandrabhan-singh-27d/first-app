console.log("Middleware setup")

// import express from "express";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const products = require("./products.json").products;


// const app = express();

// app.get('/', (req, res) => {
//     res.send(`
//     <h1>Home Page</h1>
//     <a href="/products">View Products</a>
//     `)
// });

// app.get('/products', (req, res) => {
//     const productsList = products.map(product => {
//         const { id, title, price, brand, thumbnail } = product;
//         return { id, title, price, brand, thumbnail }
//     })
//     res.json(productsList)
// });

// // Setting up the query params
// /* 
//     Remember while searching in browser the path should look like:
//     http://localhost:5000/products/query?search=iphone&limit=2
// */
// app.get('/products/query', (req, res) => {
//     const { search, limit } = req.query;
//     let requestedProduct = [...products];

//     if (search) {
//         requestedProduct = requestedProduct.filter(product => {
//             return product.title.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search)
//         });
//     }

//     if (limit) {
//         requestedProduct = requestedProduct.slice(0, Number(limit));
//     }

//     res.status(200).json(requestedProduct);
// });

// app.listen(5000, () => {
//     console.log("Server listening at port 5000...");
// });