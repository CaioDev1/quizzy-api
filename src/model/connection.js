const mysql = require('mysql2')

/* module.exports = mysql.createConnection({
    user: 'root',
    password: '*senha*',
    database: '*db_nome*'
}) */
module.exports = mysql.createPool({
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    database: process.env.AWS_DB,
    host: process.env.AWS_HOST
})
