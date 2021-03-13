const mysql = require('mysql2')

module.exports = mysql.createConnection({
    user: 'root',
    password: 'caio123',
    database: 'quizzy'
})