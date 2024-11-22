// user-service/app.js

const express = require('express');
const app = express();

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

const PORT = 5003;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
