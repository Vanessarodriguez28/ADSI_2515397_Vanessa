const Persona = require("../Persona");
class ENTRADAS extends Persona {
    inventario = []
    constructor(Id, Documento, Nombres, Apellidos, Genero, Correo, Rol, identradas, cantidad, valorunitario, fecha, factura) {
        super(Id, Documento, Nombres, Apellidos, Genero, Correo, Rol)
        this._identradas = identradas;
        this._cantidad = cantidad;
        this._valorunitario = valorunitario;
        this._fecha = fecha;
        this._factura = factura;
    }
    set identradas(identradas) {
        this._identradas = identradas;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set valorunitario(valorunitario) {
        this._valorunitario = valorunitario;
    }
    set fecha(fecha) {
        this._fecha = fecha
    }
    set factura(factura) {
        this._factura = factura;
    }
    get identradas() {
        return this._identradas
    }
    get cantidad() {
        return this._cantidad
    }
    get valorunitario() {
        return this._valorunitario
    }
    get fecha() {
        return this._fecha
    }
    get factura() {
        return this._factura
    }
    ingresar(producto) {
        this._inventario.push = (producto)
        console.log(this._inventario)
    }
    modificar(producto) {
        producto = producto
    }
    eliminar(producto) {
        producto = null
    }
    consultar() {
        console.log(this._inventario)
    }
    validar() {
        console.log(this._inventario)
    }
}
module.exports = ENTRADAS