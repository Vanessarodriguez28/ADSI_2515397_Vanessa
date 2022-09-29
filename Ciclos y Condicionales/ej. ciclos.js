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

/*2-Determinar si un numero es o no es primo */


var n = Math.round(Math.random() * 20)
var c = 0
console.log(n)
for (x = 1; x <= n; x++) {
    var d = n % x
    if (d == 0) {
        c = c + 1
    }
}
if (c == 2) {
    console.log(n + " es primo")
}


/*3-Determinar si un número es o no es perfecto. Un numero es 
perfecto si la suma de sus divisores sin incluir el propio 
número es igual a este */


var n = Math.round(Math.random() * 100),
    c = 0,
    p = 0
console.log(n)
for (i = 1; i < n; i++) {
    d = n % i
    if (d == 0) {
        c = c + i
    }
}
if (c == n) {
    console.log(n + ' es un numero perfecto')
} else {
    console.log(n + ' no es un numero perfecto')
}

/*4-Determinar cuales y cuantos números perfectos hay entre 1 y 
1000? */

var n = 1,
    c = 0,
    p = 0
console.log(n)
for (i = 1; i <= 1000; n++) {
    while (i < n) {
        d = n % i
        i += 1
        if (d == 0) {
            c = c + i
            console.log(c)
        }
        if (c == n) {
            console.log(n + ' es un numero perfecto')
        } else {
            console.log(n + ' no es un numero perfecto')
        }
    }
}

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

/*6-Calcular el máximo de números positivos introducidos por 
teclado, sabiendo que metemos números hasta que 
introduzcamos uno negativo. El negativo no cuenta. */












/*7- Encontrar un número natural n más pequeño tal que la suma de los n primeros números naturales (1 + 2 + 3 + 4…..)
exceda de una cantidad (máximo) introducida por el teclado. 
Es decir cuantos números  de la serie de los naturales debo sumar para superar el dato máximo. */











/*8-Determinar cuales son los múltiplos de 5 comprendidos entre 
1 y N*/

var n = Math.round(Math.random() * 100)
console.log(n)
for (i = 1; i < n; i++) {
    m = 5 * i
    console.log('los multiplos de 5 son: ' + m)
}

/*9-Calcular la operación x n sin utilizar la función pow */

var n = Math.round(Math.random() * 10),
    x = Math.round(Math.random() * 50)
console.log(x + ' ' + n)
for (i = 1; i <= n; i++) {
    x = x * x
}
console.log(Math.trunc(x))

/*10-Algoritmo para hallar el m.c.d de dos números m y n por 
el algoritmo de Euclides*/

var m = Math.round(Math.random() * 100),
    n = Math.round(Math.random() * 100)
console.log(m + ' ' + n)
var r1 = Math.trunc(m / n),
    r2 = n * r1,
    r3 = m - r2,
    r4 = n % r3
if (r4 == 0) {
    console.log('el m.c.d es ' + r3)
}


/*11-Solicitar 2 números al usuario e imprimir el cociente y el 
residuo del mayor en el menor sin utilizar la división ni el mod. */

var n = Math.round(Math.random() * 100),
    m = Math.round(Math.random() * 100)




/*12-Escribir un programa que visualice la siguiente figura, utilizando ciclos. 
El usuario decide cuantas líneas quiere imprimir */


var x = Math.round(Math.random() * 10 + 5)
console.log(x)
for (i = 1; i <= x; i++) {
    var p = ""
    for (j = 0; j < i; j++) {
        p = p + "*"
    }
    console.log(p)
}

/*13-Solicitar al usuario un número de hasta 9 dígitos e imprimirlo en orden contrario.
Ej. digito 6754 imprimo 4576 */

var n = 6754
for (i = 1; i <= n; i++) {
    d = n % 10
    n = d / 10
    console.log(d)
}