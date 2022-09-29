class carrito {
    constructor(nombre) {
        this._nombre = nombre
        this._productos = []
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get nombre() {
        return this._nombre
    }
    agregarProducto(producto) {
        this._productos.push(producto)
    }
    mostrarproductos() {
        console.log(this._productos)
    }
}
module.exports = carrito;