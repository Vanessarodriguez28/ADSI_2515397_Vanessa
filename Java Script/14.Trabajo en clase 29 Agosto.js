//29-08-2022//

//HERENCIAS EN JAVA SCRIPT//

/*CLASES Y SUBCLASES */

/*
set = modificar
get = obtener */
// deben de estar presentes en todas las clases


//EJERCICIO DE LA COMPAÑIA EDITORIAL
//publicacion

class publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo;
        this._precio = precio;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get titulo() {
        return this._titulo;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get precio() {
        return this._precio;
    }
}

let ej = new publicacion('Mil años de soledad', 10000);
console.log(ej)

class libro extends publicacion {
    constructor(titulo, precio, nropaginas) {
        super(titulo, precio);
        this._nropaginas = nropaginas
    }
    set nropaginas(nropaginas) {
        this._nropaginas = nropaginas;
    }
    get nropaginas() {
        return this._nropaginas
    }
}

let li = new libro('Catedral del mar', 20000, 200)
console.log(li)


class CD extends publicacion {
    constructor(titulo, precio, tiempoduracion) {
        super(titulo, precio);
        this._tiempoduracion = tiempoduracion;
    }
    set tiempoduracion(tiempoduracion) {
        this._tiempoduracion = tiempoduracion;
    }
    get tiempoduracion() {
        return this._tiempoduracion
    }
}
let cd1 = new CD('La odisea', 50000, '40:00')
console.log(cd1)


//EJERCICIO DE LA AGENCIA
//Agencia de autos

class vehiculo {
    constructor(nroserie, marca, año, precio, cantidadpasajeros) {

        this._nroserie = nroserie;
        this._marca = marca;
        this._año = año;
        this._precio = precio;
        this._cantidadpasajeros = cantidadpasajeros;
    }
    set nroserie(nroserie) {
        this._nroserie = nroserie;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get nroserie() {
        return this.nroserie;
    }
    get marca() {
        return this._marca;
    }
    get año() {
        return this._año;
    }
    get precio() {
        return this._precio
    }
}

let v = new vehiculo('1n2n3n', 'Toyota', 2017, 18000000, 4)
console.log(v)

class auto_compacto extends vehiculo {
    constructor(nroserie, marca, año, precio, cantidadpasajeros, nropuertas) {
        super(nroserie, marca, año, precio, cantidadpasajeros)

        this._nropuertas = nropuertas;
    }
    set nropuertas(nropuertas) {
        this._nropuertas = nropuertas;
    }
    get nropuertas() {
        return this._nropuertas;
    }
}
let twingo = new auto_compacto('auteco', 123456789, '414512gyu', 'volsvagen', 2013, 8000000, 4, 2)
console.log(twingo)


class auto_lujo extends vehiculo {
    constructor(nroserie, marca, año, cantidadpasajeros, precio, sistema_tecnologico) {
        super(nroserie, marca, año, cantidadpasajeros, precio)
        this._sistema_tecnologico = sistema_tecnologico;
    }
    set sistema_tecnologico(sistema_tecnologico) {
        this._sistema_tecnologico = sistema_tecnologico;
    }
    get sistema_tecnologico() {
        return this._sistema_tecnologico;
    }
}


let lamborgini = new auto_lujo('auteco', 123456789, '2156256gy', 'Ferrari', 2022, 2, 80000000, 'moderno 2022')
console.log(lamborgini)

class camionetas extends vehiculo {
    constructor(nroserie, marca, año, cantidadpasajeros, precio, cargamax) {
        super(nroserie, marca, año, cantidadpasajeros, precio)
        this._cargamax = cargamax;
    }
    set cargamax(cargamax) {
        this._cargamax = cargamax;
    }
    get cargamax() {
        return this._cargamax;
    }
}

let Toyota = new camionetas('auteco', 123456789, '262167tf', 'Toyota', 2022, 80000000, 6, '400kg')
console.log(Toyota)

class vagoneta extends vehiculo {
    constructor(nroserie, marca, año, cantidadpasajeros, precio, nroejes) {
        super(nroserie, marca, año, cantidadpasajeros, precio)
        this._nroejes = nroejes;
    }
    set nroejes(nroejes) {
        this._nroejes = nroejes;
    }
    get nroejes() {
        return this._nroejes;
    }
}

let ban = new vagoneta('auteco', 123456789, '236326gyu', 'Volsvagen', 1998, 8, 19000000, 3)
console.log(ban)