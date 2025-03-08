import express from 'express';
import connectDB from './Database/connection.js';


const app = express();
const PORT = 3000;
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, Express Server with ES Modules!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
