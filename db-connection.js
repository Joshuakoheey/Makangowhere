var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'rootytooty!1',
    database: 'makangowhere_db'
});
module.exports = connection;