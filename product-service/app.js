// product-service/app.js

const express = require('express');
const app = express();

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
});
