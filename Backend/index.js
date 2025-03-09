import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './Database/connection.js';
import schedulerRoutes from './routes/schedulerRoutes.js';

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/scheduler', schedulerRoutes);

app.get('/', (req, res) => {
    res.send('Hello, Express Server with ES Modules!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
