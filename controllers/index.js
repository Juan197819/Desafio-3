const fs = require('fs');
const random = require('random')

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo
    }

   obtProductos(){
        try {
            const productos =  fs.readFileSync(this.nombreArchivo, 'utf-8');
            const productosParseados = (JSON.parse(productos));
            return productosParseados
        } catch (error) {
            console.log(`Fallo funcion 'obtProductos', error: ${error}`);
        }
    }

   obtProductosRandom(){
        try {
            const productos =  fs.readFileSync(this.nombreArchivo, 'utf-8');
            const productosParseados = (JSON.parse(productos));
            const productoRandom= productosParseados[random.int(0, 2)]
            return productoRandom
        } catch (error) {
            console.log(`Fallo funcion 'obtProductosRandom', error: ${error}`);
        }
    }
}
const listado = new Contenedor('controllers/productos.txt')

const productoRandom = listado.obtProductosRandom(); 
const listadoProductos = listado.obtProductos()
module.exports = {productoRandom,listadoProductos}
