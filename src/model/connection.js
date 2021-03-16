const mysql = require('mysql2')
/* 
module.exports = mysql.createConnection({
    user: 'root',
    password: 'caio123',
    database: 'quizzy'
}) */
const connection = mysql.createConnection({
    host: process.env.AZURE_URL,
    user: process.env.AZURE_USER,
    password: process.env.AZURE_PASSWORD,
    database: process.env.AZURE_DB,
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

    setTimeout(connectDB, 1000)    
})

connection.on('uncaughtException', err => {
    console.log(err)

    setTimeout(connectDB, 1000)    
})

module.exports = connection