class tiendaVirtual {
    constructor(Nit, Nombre) {
        this._Nit = Nit;
        this._Nombre = Nombre;
    }
    set Nombre(Nombre) {
        this._Nombre = Nombre;
    }
    set Nit(Nit) {
        this._Nit = Nit;
    };
    get nombreTienda() {
        return this._Nombre;
    };
    get nitTienda() {
        return this._Nit;
    };
}
module.exports = tiendaVirtual;