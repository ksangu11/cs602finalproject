const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Products = require('../models/products');
const Order = require('../models/order');

//GET home page
router.get('/', function(req, res, next){
    res.render('index', {layout: 'main', title: 'Shopping Cart'});
});


//
module.exports = router;