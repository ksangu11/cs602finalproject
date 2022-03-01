const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database.js');
const Handlebars = require("handlebars");

//Configure express-handlebars as view engine
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    pageDir: __dirname + '/views/pages/',
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/pages/products', function (req, res) {
    res.render("pages/products");
});

//use static images
app.use(express.static("public/img"));

//Connect to DBs
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

//Register partials
Handlebars.registerPartial('Header', '{{header}}');
Handlebars.registerPartial('Footer', '{{footer}}');

//Register helpers
Handlebars.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()
});

//Start the server
const port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);

});