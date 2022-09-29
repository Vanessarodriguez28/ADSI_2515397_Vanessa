const Persona = require("./Persona");
class salidas extends Persona {
    inventario = [];
    contructor(Id, Documento, Nombres, Apellidos, Genero, Correo, Rol, ID_salidas, Cantidad, Valor_uni, Fecha) {
        super(Id, Documento, Nombres, Apellidos, Genero, Correo, Rol)
        this._ID_salidas = ID_salidas;
        this._Cantidad = Cantidad;
        this._Valor_uni = Valor_uni;
        this._Fecha = Fecha;
    }

    set ID_salidas(ID_salidas) {
        this._ID_salidas = ID_salidas;
    }

    set Cantidad(Cantidad) {
        this._Cantidad = Cantidad;
    }

    set Valor_uni(Valor_uni) {
        this._Valor_uni = Valor_uni;
    }

    set Fecha(Fecha) {
        this._Fecha = Fecha;
    }

    get ID_salidas() {
        return this._ID_salidas;
    }

    get Cantidad() {
        return this._Cantidad;
    }

    get Valor_uni() {
        return this._Valor_uni;
    }

    get Fecha() {
        return this._Fecha;
    }

    ingresar(ID_salidas) {
        this._inventario.push = (ID_salidas);
        console.log(this._inventario);
    }
    modificar(ID_salidas) {
        ID_ventas = ID_salidas;
    }
    consultar() {
        console.log(this._inventario);
    }
    eliminar(ID_salidas) {
        ID_salidas = null;
    }
    validar() {
        console.log(this._inventario)
    }
}

module.exports = salidas;