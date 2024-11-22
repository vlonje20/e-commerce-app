// order-service/app.js

const express = require('express');
const app = express();

app.use(express.json());

const orders = [];

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json({ message: "Order created", order });
});

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Order Service is running on port ${PORT}`);
});
