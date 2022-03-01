const Product = require('../models/products');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/finalproject');

const products = [
    new Product({
        title: 'Apple',
        imagePath: ('apple.png'),
        price: 1.62,
        category: 'fruit',
        quantityInStock:300
    }),
    new Product({
        title: 'Banana',
        imagePath: ('banana.jpg'),
        price: .69,
        category: 'fruit',
        quantityInStock:800
    }),
    new Product({
        title: 'Strawberries',
        imagePath: ('strawberries.jpg'),
        price: 6.99,
        category: 'fruit',
        quantityInStock:300
    }),
    new Product({
        title: 'Orange',
        imagePath: ('orange.png'),
        price: 1.00,
        category: 'fruit',
        quantityInStock:850
    }),
    new Product({
        title: 'Broccoli',
        imagePath: ('broccoli.jpg'),
        price: 3.85,
        category: 'vegetable',
        quantityInStock:400
    }),
    new Product({
        title: 'Onion',
        imagePath: ('onion.png'),
        price: .70,
        category: 'vegetable',
        quantityInStock:950
    }),
    new Product({
        title: 'Carrots',
        imagePath: ('carrots.png'),
        price: 3.99,
        category: 'vegetable',
        quantityInStock:800
    }),
];
let done = 0;
for (let i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}