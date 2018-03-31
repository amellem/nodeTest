const mysql = require('mysql');

// Create MySQL Connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'nodetest'
});

// MySQL Connect
conn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});
/*
// Create Database
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
*/

// Read
exports.queryStringCMD = (req, res) => {
    let cmd = 'SELECT * FROM posts';
    let returnValue;
    conn.query(cmd, (err, results) => {
        if (err) {
            throw err;
        } else {
            res.render('posts', { data: results });
        }
    });
}

exports.test = () => {
    return 'Successful Test';
}
/*
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
*/