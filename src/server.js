const express       = require('express')
const productRouter = require('./routes/products.router.js')
const logger        = require('morgan')
const cartRouter = require('./routes/carts.router.js')


// import express from 'express'

const app = express()
const PORT = 8080
 // dirname()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/public'))
app.use(logger('dev'))



// endpoint


app.use('/api/products', productRouter)
app.use('/api/carts',cartRouter)

app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send('error de server')
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})


/*
test
Crear producto POST
//http://localhost:8080/api/products
en body y JSON
{
    "title":"producto 1",
    "descripcion":"descripcion del producto 1",
    "stock": 100,
    "price":1000,
    "code":"abc123"
} 

Obtener productos GET
http://localhost:8080/api/products
raw - JSON

Eliminar producto DELETE
http://localhost:8080/api/products/3
*/

