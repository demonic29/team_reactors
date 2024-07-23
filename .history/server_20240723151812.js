
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://localhost:3000", // Change to your frontend's address
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
