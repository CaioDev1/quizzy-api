const dotenv = require('dotenv').config()
const express = require('express')
const errorHandler = require('./src/errorHandler')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('./src/routes'))

app.use(errorHandler)

app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 5000')
})