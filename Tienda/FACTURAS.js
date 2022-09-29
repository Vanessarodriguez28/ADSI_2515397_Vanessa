const salidas = require("./salidas tv");
class factura extends salidas {
    constructor(ID_salidas, Cantidad, Valor_uni, Fecha, fecha, nombreproducto, valorunitario, cantidad, codigofactura) {
        super(ID_salidas, Cantidad, Valor_uni, Fecha)
        this._fecha = fecha;
        this._nombreproducto = nombreproducto;
        this._valorunitario = valorunitario;
        this._cantidad = cantidad;
        this._codigofactura = codigofactura;

    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    set nombreproducto(nombreproducto) {
        this._nombreproducto = nombreproducto;
    }
    set valorunitario(valorunitario) {
        this._valorunitario = valorunitario;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set codigofactura(codigofactura) {
        this._codigofactura = codigofactura;
    }
    get fecha() {
        return this._fecha
    }
    get nombreproducto() {
        return this._nombreproducto
    }
    get valorunitario() {
        return this._valorunitario
    }
    get cantidad() {
        return this._cantidad
    }
    get codigofactura() {
        return this._codigofactura
    }
    preciototal() {
        preciofin = this.valorunitario * this._cantidad
        console.log('El valor total de los productos es: ', preciofin)
    }
}

module.exports = factura