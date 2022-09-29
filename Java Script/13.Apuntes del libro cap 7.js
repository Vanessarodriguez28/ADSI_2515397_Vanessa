//29-08-2022//

//Leer de la pagina 149 a la 161 del hermoso libro de JS

//CAP 7 (CLASES)

/*
-Programacion orientada a objetos 
-Clases y objetos 
-Clases
-Herencia 
-Prototipos
*/

/*los objetos son una colección de propiedades y métodos.
Las propiedades de un objeto deben tener
nombres sensatos. Entonces, por ejemplo, si tenemos un
objeto persona, este objeto podría tener
propiedades llamadas
age y lastName que contienen valores. 
 */

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua"
};
console.log(dog)

/*Las clases en JavaScript encapsulan datos y funciones que forman parte de esa clase. Si usted
crea una clase, luego puede crear objetos usando esa clase usando la siguiente sintaxis:*/
;

class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        [150]
        this.prop2 = prop2;
    }
}

let obj = new ClassName("arg1", "arg2");

console.log(1, 2);

/*Este código define una clase con ClassName como nombre, declara una variable obj y
inicializa esto con una nueva instancia del objeto. Se proporcionan dos argumentos. Estas
El constructor utilizará los argumentos para inicializar las propiedades.*/

function Perro(Nombre, color, breed) {
    this.Nombre = Nombre;
    this.color = color;
    this.breed = breed;
}
let Perro1 = new Perro("Jacky", 30, "brown", "labrador");
console.log(Perro1);


/*El ejemplo del perro también podría haberse hecho usando una sintaxis de clase. Tendría
se veía así*/

class Perro {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let Perro2 = new Perro("JavaScript", 2.4, "brown", "chihuahua");
console.log(Perro2);


/*Constructores
El método constructor es un método especial que usamos para inicializar objetos con
nuestro modelo de clase. Solo puede haber un constructor en una clase. este constructor
contiene propiedades que se establecerán al iniciar la clase. */

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let Persona2 = new Persona('Vanessa', 'Rodriguez')
console.log('Hola', Persona2)

/*
Ejercicio de práctica 7.1

Realice los siguientes pasos para crear una clase de persona e imprimir instancias de amigos.
nombres:

1. Crea una clase para
Persona incluido el constructor por nombre y
apellido.

2. Crea una variable y asigna un valor de la nueva
Objeto de persona usando su nombre y apellido de un amigo.

3. Ahora agregue una segunda variable con el nombre de otro amigo usando su primer nombre
Y apellido.

4. Envíe a ambos amigos a la consola con un saludo de
Hola.*/

class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
    }
}
var p1 = new persona('Andres', 'Rodriguez')
console.log('hola', p1.primernombre, p1.apellido);

var p2 = new persona('Johan', 'Guerrero')
console.log('hola', p2.primernombre, p2.apellido);


/*Ejercicio de práctica 7.2

Obtenga el nombre completo de su amigo:

1. Usando el
Clase de persona del ejercicio de práctica 7.1, agregue un método llamado
nombre completo, que devuelve el valor concatenado de nombre y apellido
cuando es invocado.

2. Crear valores para
person1 y person2 usando los nombres y apellidos de dos amigos.

3. Usando el
método fullname dentro de la clase, devuelve el nombre completo de uno o
ambas personas */

class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
        this.nombre = this.primernombre + ' ' + this.apellido
    }
}
let p1 = new persona('Johan', 'Marquez')
console.log('Hola', p1.nombre)

let p2 = new persona('Katerin', 'Guerrero')
console.log('Hola', p2.nombre)



class persona {
    constructor(nombre, documento) {
        this.nombre = nombre;
        this.documento = documento;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set documento(documento) {
        this._documento = documento;
    }

    get nombre() { return this._nombre }
    get documento() { return this._documento }
}
class aprendiz extends persona {
    constructor(nombre, documento, genero) {
        super(nombre, documento);
        this.genero = genero;
    }
    set genero(genero) {
        this.__genero = genero;
    }

    get genero() { return this._genero }

}

let p1 = new persona('Katerin Guerrero', 123452)
console.log(p1)

let p2 = new persona('Ana Agudelo', 258794, Femenino)
console.log(p2)