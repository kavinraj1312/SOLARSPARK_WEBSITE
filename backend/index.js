import express from 'express';
import cors from 'cors'

import { PORT, MONGO_URI } from './config.js';
import { connectDB } from './mongo.js';
import approute from './router/Route.js'; 

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization']

}))

app.use('/solar', approute);



app.get('/', (req, res) => {
    res.send('Home');
});


const start = async () => {
    try {
        await connectDB(MONGO_URI); 

        
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};


start();
