const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'artchuu'
});

connection.connect(function(err) {
    if(err) {
        throw err;
    } else {
        console.log('mysql conectado');
    }
});

module.exports = connection;