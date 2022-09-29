class productotv {

    constructor(Codigo_p, Nombre_p, Marca_p, Precio_p, Stock_p, Cantidades) {

        this._Codigo_p = Codigo_p;
        this._Nombre_p = Nombre_p;
        this._Marca_p = Marca_p;
        this._Precio_p = Precio_p;
        this._Stock_p = Stock_p;
        this._Cantidades = Cantidades;
    }
    set Codigo_p(Codigo_p) {
        this._Codigo_p = Codigo_p;
    }

    set Nombre_p(Nombre_p) {
        this._Nombre_p = Nombre_p;
    }

    set Marca_p(Marca_p) {
        this._Marca_p = Marca_p;
    }

    set Precio_p(Precio_p) {
        this._Precio_p = Precio_p;
    }

    set Stock_p(Stock_p) {
        this._Stock_p = Stock_p;
    }

    set Cantidades(Cantidades) {
        this._Cantidades = Cantidades;
    }

    get Codigo_p() {
        return this._Codigo_p;
    }

    get Nombre_p() {
        return this.Nombre_p;
    }

    get Marca_p() {
        return this.Marca_p;
    }

    get Precio_p() {
        return this.Precio_p;
    }

    get Stock_p() {
        return this.Stock_p;
    }

    get Cantidades() {
        return this.Cantidades;
    }
    Resultado() {
        let rt = this._Cantidades * this._Precio_p
        console.log('El precio total es: ', rt)
    }
}

module.exports = productotv;