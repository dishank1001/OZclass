import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import products from './data/products.js';
import connectDB from './config/db.js';
import productPath from './routes/productPath.js'

dotenv.config();

connectDB();

const app = express();

app.get('/', (req,res) => {
    res.send('Api Running fine...');
})

app.use('/api/products', productPath)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.green.bold);
});