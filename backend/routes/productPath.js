import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();


//Public route
router.get('/', async (req,res) => {

    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(404).json({message: 'Product not found'});

    } 
})


//Public route
router.get('/:id', async (req,res) => {

    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: 'Product not found'});

    }
})

export default router