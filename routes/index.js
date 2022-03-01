const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Products = require('../models/products');
const Order = require('../models/order');

//GET home page
router.get('/', function(req, res, next){
    res.render('index', {layout: 'main', title: 'Shopping Cart'});
});
//GET products page
router.get('/', function(req, res, next){
    let sucessMsg = req.flash('success')[0];
    Product.find(function(err, docs) {
        let productChunks = [];
        let chunkSize = 3;
        for(let i = 0; i < docs.length; i=+ chunkSize){
            productChunks.push(docs.slice(i,  i + chunkSize));
        }
    res.render('/products', {layout: 'main', title: 'Shopping Cart', products: productChunks});
});

//Add to cart
router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

//Reduce items
router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

//Remove from cart
router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});
//GET shopping cart
router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('pages/shopping-cart', {products: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

});
//
module.exports = router;
