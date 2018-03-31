// Modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

// Create MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodetest'
});

// MySQL Connect
db.connect((err) => {
    if ( err ){
        throw err;
    }
    console.log('MySQL connected...');
});

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
app.get('/createdb', (req,res)=>{
    let cmd = 'CREATE DATABASE nodetest';
    db.query(cmd, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.end('Database Created...');
    });
});

// Create Table
app.get('/createposttable', (req, res) => {
    let cmd = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(cmd, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Create 
app.get('/addpost1', (req, res) => {
    let post = {title: 'Post One', body: 'This is post number one'};
    let cmd = 'INSERT INTO posts SET ?';
    let query = db.query(cmd, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');

    })
});

// Read
app.get('/getposts', (req, res)=>{
    let cmd = 'SELECT * FROM posts';
    let query = db.query(cmd, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

// Read WHERE
app.get('/getposts/:id', (req, res)=>{
    let cmd = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(cmd, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    });
});

// Update
app.get('/updatepost/:id', (req, res)=>{
    let newTitle = 'Updated Title'
    let cmd = `UPDATE post SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(cmd, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    });
});

// Delete
app.get('/deletepost/:id', (req, res)=>{
    let cmd = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(cmd, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    });
});

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
app.listen(3000, () => {
    console.log('Server Started on Port 3000...');
})