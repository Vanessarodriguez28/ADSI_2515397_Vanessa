//23-08-2022//

//APUNTES//

//OBJETOS LITERALES//

/*MISION: Escriba métodos para suma, promedio, mayor, menor. 
Escriba una clase que represente un producto comercial de cualquier área. 
Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA*/

//METODOS PARA SUMA 

/*Funcion para sumar dos numeros enteros positivos sin llevar*/

function SumarSinLlevar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (Number.isIntiger(a) && Number.isInteger(b)) {
            if (a > 0 && b > 0) {
                let suma = 0;
                let magnitud = 1;

                while (a > 0 && b > 0) {
                    suma += ((a + b) % 10) * magnitud;
                    a = Math.floor(a / 10);
                    b = Math.floor(b / 10);
                    magnitud *= 10;
                }
            } else {
                throw TypeError('Los dos numeros deben ser positivos');
            }
        } else {
            throw TypeError('Los dos numeros deben de ser enteros')
        }
    } else {
        throw TypeError('Los dos argumentos deben de ser numeros')
    }
}

try {
    console.log(SumarSinLlevar(937, 254));
} catch (e) {
    console.log('Suma: ${e.message}');
}
console.log();


/*Funcion para sumar dos numeros*/

function sumar(a, b) {
    return a + b;
}

let total = sumar(10, 20)
console.log(total);


/*Sumar en un array se debe utilizar el ciclo for */

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);



//METODOS PARA PROMEDIO 

/*No hay una función predefinida disponible en JavaScript para calcular el promedio de un array.
 Podemos hacer la función para obtener el promedio de un array usando la fórmula de promedio y un bucle. 
 Para encontrar el promedio de un array, tenemos que encontrar la suma de todos los elementos presentes en un array
usando un bucle y luego dividir la suma con el número de elementos presentes en el array, que podemos encontrar usando la función length. 
Por ejemplo,creemos la función para calcular el promedio de un array dada y probarla con un array y mostrar el resultado del promedio en la consola.  */


function Promedio(myArray) {
    var i = 0,
        sum = 0,
        ArrayLen = myArray.length;
    while (i < ArrayLen) {
        sum = sum + myArray[i++];
    }
    return sum / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
var a = Promedio(myArray);
console.log(a)

//METODOS PARA MAYOR 

/*max() La función Math. max() retorna el mayor de cero o más números dados como parámetros de entrada, 
o NaN si cualquier parámetro no es un número y no puede ser convertido en uno. */

console.log(Math.max(1, 3, 2)); //3

console.log(Math.max(-1, -3, -2)); // -1


const array1 = [1, 4, 2];
console.log(Math.max(...array1));

console.log(Math.max(10, 20)); //  20

console.log(Math.max(-10, -20)); // -10

console.log(Math.max(-10, 20)); //  20

function max(t) {
    v = []
    suma = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    }
    console.log(v)
    console.log(Math.max.apply(null, v))
}
max(10)

//METODOS PARA MENOR 

/*La función Math.min()devuelve el menor de cero o más números.

Sintaxis
Math.min([valor1[, valor2[, ...]]])*/

/* Ejemplos
usandoMath.min()
Lo siguiente encuentra el mínimo de (x) e (y) y lo asigna a (z):*/

function min(x, z) {
    return Math.min(x, z)
}
var x
var z

console.log(Math.min(50, 20));


//Para imprimir numero minimo

console.log(Math.min(10, 20)); // 10

console.log(Math.min(-10, -20)); //-20

console.log(Math.min(-10, 20)); //-10


/************************************************************* */
/*Escriba una clase que represente un producto comercial de cualquier área. 
Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA*/

// Solucion completa
//EJEMPLO DE PRODUCTO PORTATIL//

class Portatil {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
        this.precio = precio;
        this.iva = function(iva) {
            let Total = precio * iva
            console.log('El iva es', Total)
            let total = (precio + Total)
            console.log('El precio total es', total)
        }
    }
}
let Portatil2 = new Portatil("Acer", 634, "Negro", 500000)
console.log(Portatil2)
Portatil2.iva(0.19)



class Portatil {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.precio = precio
    }
    get iva() {
        return this._iva
    }
    set iva(iva) {
        let pv = this.precio * iva
        console.log('El iva es: ', pv)
        let total = this.precio + pv
        console.log('El precio total es: ', total)
    }

}
let Portatil1 = new Portatil("Acer", 634, "Negro", 500000)
console.log(Portatil1)
Portatil1.iva = 0.20


/******************************************************************* */
class productomaletin {
    constructor(codigo, color, calidad) {
        this.codigo = codigo
        this.color = color
        this.calidad = calidad
    }
}
console.log(productomaletin.name);

//Para nombrar nueva clase 

let productomaletin = class productomaletin2 {
    constructor(codigo, color, calidad) {
        this.codigo = codigo
        this.color = color
        this.calidad = calidad
    }
};

console.log(productomaletin.name);



/* Definiendo clases
 Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, 
 la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.*/

/* Constructor
El método constructor es un método especial para crear e inicializar un objeto creado con una clase.
 Solo puede haber un método especial con el nombre "constructor" en una clase.
  Si esta contiene mas de una ocurrencia del método constructor, se arrojará un Error SyntaxError*/

/*Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase */

/*Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una 
propiedad se llama setter.*/

// EJEMPLO DE CLASES CON RECTANGULO  //

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}
console.log(Rectangulo.name);

// Para renombrar nueva clase

let Rectangulo = class Rectangulo2 {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};
console.log(Rectangulo.name);



//Ejemplo completo 

class Rectangulo {
    constructor(alto, ancho) {
            this.alto = alto;
            this.ancho = ancho;
        }
        // Getter
    get area() {
            return this.calcArea();
        }
        // Método
    calcArea() {
        return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area);


//EJEMPLO CON PRODUCTO GOMITAS //
class gomitas {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.precio = precio
    }
    get iva() {
        return this._iva
    }
    set iva(iva) {
        let pv = this.precio * iva
        console.log('El iva es: ', pv)
        let total = this.precio + pv
        console.log('El precio total es: ', total)
    }

}
let gomitas1 = new gomitas("Trululu", 24, "amarillo", 2000)
console.log(gomitas1)
gomitas1.iva = 0.20