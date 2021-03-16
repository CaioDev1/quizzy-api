const mysql = require('mysql2')
/* 
module.exports = mysql.createConnection({
    user: 'root',
    password: 'caio123',
    database: 'quizzy'
}) */
module.exports = mysql.createConnection({
    host: process.env.AZURE_URL,
    user: process.env.AZURE_USER,
    password: process.env.AZURE_PASSWORD,
    database: process.env.AZURE_DB,
})