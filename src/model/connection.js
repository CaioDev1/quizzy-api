const mysql = require('mysql2')

/* module.exports = mysql.createConnection({
    user: 'root',
    password: '*senha*',
    database: '*db_nome*'
}) */
let connection = mysql.createConnection({
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    database: process.env.AWS_DB,
    host: process.env.AWS_HOST,
    connectTimeout: 30
})

function connectDB() {
    connection.connect(function(error){
        if(!!error) console.log(error);
         else console.log('SQL Database Connected!');
    });
}

connectDB()

connection.on('error', err => {
    console.log(err)
})
connection.on('uncaughtException', err => {
    console.log(err)
})

module.exports = connection
