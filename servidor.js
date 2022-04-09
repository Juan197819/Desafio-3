const express = require('express')
const {productoRandom, listadoProductos} = require('./controllers/index')
const app = express()

app.get('/productos', (req, res) => {
    res.send(listadoProductos)
})
app.get('/productoRandom', (req, res) => {
    res.send(productoRandom)
})

const server = app.listen(8080,()=> {
    console.log(`Escuchando en el puerto ${server.address().port}`);
})
server.on('error',error=>console.log(`el error fue el sig: ${error}`) )

