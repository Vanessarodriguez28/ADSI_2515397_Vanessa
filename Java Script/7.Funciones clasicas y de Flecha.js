//17-08-22//

//FUNCIONES 


function perfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++)
        if (num % i == 0) {
            suma = suma + i;
        }
}
if (suma == num) {
    return ` ${num} es perfecto`;
} else {
    return `${num} No es perfecto`;
}
console.log(perfecto(28));

//ACTIVIDAD TRIANGULO

function triangulo(a, b, c) {

    if (a != b && b != c) {
        console.log('Escaleno')
    } else if (a == b && b == c) {
        console.log('Equilatero')
    } else {
        console.log('Isoceles')
    }

}

//funcion flecha sin paramentros 
const saludary = () => `hola ADSI`;
console.log(saludar2());


//funcion flecha con un paramentros
const saludarx = (nombre) => `hola ${nombre} ¿conoces soacha?`;
console.log(saludar3('instructor samuel'));




/*
//  1. funcion para resolver el teorema de pitagoras con flecha

const miFuncion = (cateto1, cateto2) => Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
console.log(miFuncion(6, 10));
  (triangulo (5,3,5))

  /Función felcha sin parametros
const saludar2=()=>'Hola Soacha';
console.log(saludar2());

//Función flecha con un paramtro
const saludar3=nombre=> `Hola ${nombre} bienvenido al CIDE`;
console.log(saludar3('Batman'));

const miFuncion=(ao,ba)=>Math.sqrt(Math.pow(ao,2)+Math.pow(ba,2));
console.log(miFuncion(2,3))*/


//ACTIVIDAD TEOREMA DE PITAGORAS


/*********************************************************************** */

//CICLOS PUNTO 1 Y 5

/*1-Determinar los divisores de un  número introducido por 
teclado */

var n = Math.round(Math.random() * 100)
console.log(n)
for (i = 1; i <= n; i++) {
    d = n % i
    if (d == 0) {
        console.log(i + ' es divisor de ' + n)
    }
}

//FUNCION CLASICA PUNTO 1 CICLO

function divisor(n) {
    let d = 0
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i)
        }
    }
}
(divisor(10))


//FUNCION FLECHA PUNTO 1 CICLO


const n = 10
const divisor = (n) => {
    return `el numero es divisor`
}
console.log(divisor(n));







/*5-¿Cuáles y cuántos son los números primos comprendidos 
entre 1 y 1000? */


var c = 0
for (n = 0; n <= 10; n++) {
    x = 0
    c = 0 //numeros del 1 al mil
    while (x < n) { //numero de divisores


        x = x + 1
        if (n % x == 0) {
            c++
        }
    }

    if (c == 2) {
        console.log(n + " es primo")
    }
}

//FUNCION CLASICA PUNTO 5 CICLO

//FUNCION FLECHA PUNTO 5 CICLO







//CONDICIONALES PUNTO 1 Y 4

/*1-Pedir 3 numeros e indicar cual de ellos es el valor del medio. 
Ej 11, 2  1000, el  valor del medio es 11. No use operadores lógicos */

var a = Math.round(Math.random() * 100);
console.log(a);
var b = Math.round(Math.random() * 100);
console.log(b);
var c = Math.round(Math.random() * 100);
console.log(c);

let medio = (a, b, c);
let median = ((medio[a]) + (medio[b]) + (medio[c]) / 2);
console.log('el numero medio es: ', medio);


//FUNCION CLASICA PUNTO 1 CONDICIONAL

function numero(a, b, c) {
    if (b < a && b < c) {
        console.log('el segundo numero es el menor', b)
    } else if (a < b && a < c) {
        console.log('el primer numero es menor', a)
    } else {
        console.log('el tercer numero es menor')
    }
}
numero(4, 2, 3)


//FUNCION FLECHA PUNTO 1 CONDICIONAL

/*4-Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,  etc.
  Use la escala que prefiera, pero cerciórese que tiene 5 valores */


var nota = Math.round(Math.random() * 10)
console.log

if (nota == 10) {
    console.log('su nota es excelente', nota)
} else if (nota >= 8) {
    console.log('su nota es superior', nota)
} else if (nota >= 6) {
    console.log('su nota es buena', nota)
} else if (nota >= 5) {
    console.log('su nota es suficiente', nota)
} else if (nota >= 2) {
    console.log('su nota es baja', nota)
} else {
    console.log('su nota es insuficiente', nota)
}

//FUNCION CLASICA PUNTO 4 CONDICIONAL

function notas(n) {
    if (n == 10) {
        return console.log('su nota es la maxima')
    } else if (n > 8) {
        return console.log('su nota es excelente')
    } else if (n > 6) {
        return console.log('su nota es regular')
    } else if (n > 4) {
        return console.log('su nota mala')
    } else {
        return console.log('su nota es baja')
    }
}
notas(10);

//FUNCION FLECHA PUNTO 4 CONDICIONAL












/******************************************************************* */

//FUNCIONES DE FLECHA 


const x = 10
const saludar = () => {
    return `Hola soacha querido`
}
console.log(saludar());

//funcion flecha sin parametros
const saludar2 = () => `Hola Vane bienvenida a soacha querido`
console.log(saludar2());

//funcion flecha con un parametro 
const saludar3 = (nombre) => `Hola ${nombre} bienvenida a Dubai <3`;
console.log(saludar3('Vanessa'));

//funcion que tiene mas de un parametro

const miFuncion = (c1, c2) => Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
console.log(miFuncion(7, 9));


/*********************************************************** */

//ARREGLOS Y VECTORES



/*********************************************************** */

//MISION 

//REALIZAR LOS PROGRAMAS DE:

//DESVIACION ESTANDAR
//MODA
//MEDIANA 

//5 FUNCIONES CLASICAS Y 5 FUNCIONES FLECHA DE CICLOS Y CONDICIONALES.