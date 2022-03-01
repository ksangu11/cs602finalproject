const mongoose = require('mongoose');

// Product Schema
const ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantityInStock:{
        type: Number,
        required: true
    }
    
});

const Product = module.exports = mongoose.model('Product', ProductSchema);