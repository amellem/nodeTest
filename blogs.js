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

// Create
exports.SavePost = (req, res) => {
    const cmd = 'INSERT INTO posts SET ?';
    let values = {title: req.body.title, body: req.body.body};
    conn.query(cmd, values, (err, results) => {
        if (err) throw err;
    });
}

// Read
exports.GetAllPosts = (req, res) => {
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