//24-08-2022//

//APUNTES DE LA CLASE //

//var x = 12;
class Animal {
    constructor() {
        console.log('se activo a bob')
    }
    mensaje() {
        console.log('soy el mensaje')
    }
}
var objeto1 = new Animal()
objeto1.mensaje();


class Animal {
    constructor(nombre) {
            this._nombre = nombre;
            //console.log ('se activo el constructor')
        }
        //camel case
        // getnombre (){
        //return this.nombre;
        //}
    get nombre() {
            return this._nombre
        }
        //setnombre(nombre) {
        //this.nombre= nombre;
        //}
    set nombre(nombre) {
        this._nombre = nombre;
    }
    mensaje() {
        console.log('soy un mensaje')
    }
}

var objeto1 = new Animal('conejo');
console.log(objeto1)
objeto1.nombre = 'conejo domestico'
console.log(objeto1.nombre)


//mision 
//escriba metodos para suma,promedio,mayor o menor escriba una clase que represente un producto comercial de cualquier area debe tener constructor setter y getter y un metodo para calcular despues del iva