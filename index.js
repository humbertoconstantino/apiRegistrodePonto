const express = require('express')

const app = express()

var register = false

app.post('/register', (req, res) =>{
    this.register = true
    res.send('')
}) 

app.get('/', (req, res) =>{
    res.send(this.register)
    this.register = false
}) 

app.listen(3333, (console.log('Servidor aberto')))