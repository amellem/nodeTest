// Modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Server
var app = express();

// custom MiddleWare
/*var logger = function(req, res, next){
    console.log('Logging');
    next();
}
app.use(logger); */

// view Engine MiddleWare
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})


// Start Server
app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})