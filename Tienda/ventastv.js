const Persona = require("./Persona");
const productotv = require("./productotv");

class ventastv extends(Persona, productotv) {
    inventario = []
    constructor(Codigo_p, Nombre_p, Marca_p, Precio_p, Stock_p, Cantidades, fecha) {
        super(Codigo_p, Nombre_p, Marca_p, Precio_p, Stock_p, Cantidades)
        this._fecha = fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get fecha() {
        return this._fecha
    }
    resultadototal() {
        let rt = this._Cantidades * this._Precio_p
        console.log('El precio total es ', rt)
    }
    agregarproducto(v) {
        this.inventario.push(v)
        console.log(this.inventario)
    }
}
module.exports = ventastv;