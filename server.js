const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to handle CORS
app.use(cors({
    origin: "http://localhost:3000/manager", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define the port to run the server on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
