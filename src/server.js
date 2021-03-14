const express = require('express')
const errorHandler = require('./errorHandler')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('./routes'))

app.use(errorHandler)

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})