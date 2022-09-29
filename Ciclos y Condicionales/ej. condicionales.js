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


/*2-Escribe un programa que pida tres números y que escriba si son los tres  iguales, 
si hay dos iguales o si son los tres distintos */


var v = Math.round(Math.random() * 50)
var k = Math.round(Math.random() * 50)
var l = Math.round(Math.random() * 50)

if (v === k) {
    console.log('Los numeros son iguales', [v, k, l])
} else if (v === l) {
    console.log('Los numeros son iguales', [v, k, l])
} else if (k == l) {
    console.log('Los numeros son iguales', [v, k, l])
} else if (v != k) {
    console.log('Los numeros son diferentes', [v, k, l])
} else if (v != l) {
    console.log('Los numeros son diferentes', [v, k, l])
} else if (k != l) {
    console.log('Los numeros son diferentes', [v, k, l])
}

/*CORRECCION CON FUNCION */
function digitos(a, b, c) {
    if (a == b && a == c) { console.log('Los digitos son iguales', [a, b, c]) } else if (b == a && b == c) { console.log('Los digitos son iguales', [a, b, c]) } else if (c == a && c == b) { console.log('Los digitos son iguales') } else if (a != b && a != c) { console.log('Los digitos son diferentes', [a, b, c]) } else if (b != a && b != c) { console.log('Los digitos son diferentes', [a, b, c]) } else if (c != a && c != b) { console.log('Los digitos son diferentes', [a, b, c]) }
}
digitos(2, 2, 2);



/*3-Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene.
 Cuando el número  exceda los límites emita un mensaje y finalice el programa */


var numero = Math.round(Math.random() * 9.999 * 999);
console.log(numero)
if (numero < 10) {

    console.log("tiene 1 cifra");
} else if (numero < 100) {
    console.log("tiene 2 cifras");
} else if (numero < 1000) {
    console.log("tiene 3 cifras");
} else if (numero < 10000) {
    console.log("tiene 4 cifras");
}



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


/*5-En un juego de preguntas a las que se responde “Si” o “No” gana quien  responda correctamente las tres preguntas. 
Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. 
Las preguntas son: 1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810? 
3. The Doors fue un grupo de rock Americano? */

var x = Math.round(Math.random() * 2);
var y = Math.round(Math.random() * 2);
var z = Math.round(Math.random() * 2);
console.log('responde las siguientes preguntas');


if (x == 1) {
    console.log('\n Colon descubrió América?');
    console.log('\n has respondido correctamente');

}
if (x == 1 && y == 1) {
    console.log('\n La independencia de Colombia fue en el año 1810?');
    console.log('\n has respondido correctamente');

}
if (x == 1 && y == 1 && z == 2) {
    console.log('\n The Doors fue un grupo de rock Americano?');
    console.log('\n has respondido correctamente');

}
if (x == 1 && y == 1 && z == 2) {
    console.log('\n has gando el juego');
} else {
    console.log('has perdido')
}

/*6-Pida un numero al usuario que representa días del año. Diga a que mes del año corresponde así.
 Si el número es menor o igual a 31 indica que esta en enero, Pero si el número por ejemplo es 32 indica que es el 1 de febrero. 
No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días. */

var n = Math.round(Math.random() * 365)
console.log
if (n <= 0) {
    console.log(" El numero no valido")
} else if (n <= 31) {
    console.log("El numero ingresado muestra el mes de Enero")
} else if (n < 59) {
    console.log("El numero ingresado muestra el mes de FEBRERO")
} else if (n < 90) {
    console.log("El numero ingresado muestra el mes de MARZO")
} else if (n < 120) {
    console.log("El numero ingresado muestra el mes de ABRIL")
} else if (n < 151) {
    console.log("El numero ingresado muestra el mes de MAYO")
} else if (n < 181) {
    console.log("El numero ingresado muestra el mes de JUNIO")
} else if (n < 212) {
    console.log("El numero ingresado muestra el mes de JULIO")
} else if (n < 243) {
    console.log("El numero ingresado muestra el mes de AGOSTO")
} else if (n < 270) {
    console.log("El numero ingresado muestra el mes de SEPTIEMBRE")
} else if (n < 304) {
    console.log("El numero ingresado muestra el mes de OCTUBRE")
} else if (n < 334) {
    console.log("El numero ingresado muestra el mes de NOVIEMBRE")
} else {
    console.log("El numero ingresado muestra el mes de DICIEMBRE")
}


/*7-Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. manera: 
Si trabaja 40 horas o menos se le paga $2600 por hora Si trabaja más de 40 horas se le paga
 $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra */

var h = Math.round(Math.random() * 100)

if (h <= 40) {
    n = h * 2600
    console.log('horas trabajadas', h, 'Pago de horas trabajadas', n)
} else(e = h * 5000)
console.log('horas trabajadas:', h, 'Pago de horas trabajadas:', e)


/*8-Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo los cálculos así:
 Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 200 pesos y cada minuto adicional cuesta 50 pesos. 
Escriba un programa que permita calcular el costo de una llamada dados los minutos de duración*/

var m = Math.round(Math.random() * 1000)

if (m <= 180) {
    mt = m * 1.1111111111111111111111111111111
    console.log('El numero de segundos es: ', m, 'el total a pagar es: ', mt)
} else(me = m * 1.2)
console.log('El numero de segundos es: ', m, 'el total a pagar es: ', me)


/*9-Solicite una fecha al usuario. en formato día, mes y año.
 Dígale cuanto tiempo ha pasado desde esa fecha hasta hoy o cuanto
 falta para llegar a esa fecha si es posterior */

var d = Math.round(Math.random() * 31)
var m = Math.round(Math.random() * 12)
var a = Math.round(Math.random() * 2000)

dd = d - 1
mm = m - 1
aa = 2022 - a

console.log('el dia es: ', d, 'el mes es: ', m, 'el año es: ', a)
console.log('en dias es', dd, 'la reste del mes es: ', mm, 'la resta del año: ', aa);




/*10-Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas).
 El programa debe responder que hora será un segundo después. Ej: ingreso 11:59:59,
  el programa responde 12:00:00.  */

var h = Math.round(Math.random(1) * 24)
console.log(h)
var m = Math.round(Math.random(1) * 60)
console.log(m)
var s = Math.round(Math.random(1) * 60)
console.log(s)

var s = s + 1
console.log(s)
if (m > 59) {
    var m = 0
}
if (h > 23) {
    var h1 = 1
}
if (m > 59) {
    var s = 0
    var m = m + 1
} else if (m > 59) {
    var m = 0
    var h = h + 1
} else {
    console.log('La hora es ', h, m, s)
}


/*11-Escribir un algoritmo que pida un valor entero que equivale a una cantidad de DINERO y calcule
a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 1.000 equivalen. Si el usuario digita 282000el programa 
debe responder cinco billetes de 50.000,un billete de veinte mil, un billete de diez mil, un billete de dos mil. */

var d = Math.round(Math.random() * 100000)
console.log(+d)
i = 0
ii = 0
iii = 0
iv = 0
v = 0
vi = 0
if (d >= 50000) {
    i = Math.round(d / 50000)
    d = d - (i * 50000)
    console.log('Hay', +i, 'billetes de 50000')
} else {
    console.log('no hay ningun billete de 50000')
}
if (d >= 20000) {
    ii = Math.round(d / 20000)
    d = d - (ii * 20000)
    console.log('Hay', +ii, 'billetes de 20000')
} else {
    console.log('no hay ningun billete de 20000')
}
if (d >= 10000) {
    iii = Math.round(d / 10000)
    d = d - (i * 10000)
    console.log('Hay', +iii, 'billetes de 10000')
} else {
    console.log('no hay ningun billete de 10000')
}
if (d >= 5000) {
    iv = Math.round(d / 5000)
    d = d - (iv * 5000)
    console.log('Hay', +iv, 'billetes de 5000')
} else {
    console.log('no hay ningun billete de 5000')
}
if (d >= 2000) {
    v = Math.round(d / 2000)
    d = d - (v * 2000)
    console.log('Hay', +v, 'billetes de 2000')
} else {
    console.log('no hay ningun billete de 2000')
}
if (d >= 1000) {
    vi = Math.round(d / 1000)
    d = d - (v * 1000)
    console.log('Hay', +vi, 'billetes de 5000')
} else {
    console.log('no hay ningun billete de 1000')
}






/*12-Solicite la hora en formato horas, minutos y segundos.
  Imprima en pantalla la hora que será dentro de 1 segundo */

var h = Math.round(Math.random(1) * 24)
console.log(h)
var m = Math.round(Math.random(1) * 60)
console.log(m)
var s = Math.round(Math.random(1) * 60)
console.log(s)

var s = s + 1
console.log(s)

if (m > 59) {

}
if (h > 23) {

}
if (s > 59) {
    m = m + 1
} else if (m > 59) {
    h = h + 1
} else {
    console.log('la hora es:', h, " ", m, " ", s, " ");
}


/*13-Solicite al usuario una cantidad numérica que expresa segundos (medida de  tiempo). 
  Exprésela (conviértala) en horas minutos y segundos. Según el caso */

var ss = Math.round(Math.random() * 100000)
minuto = ss / 60
hora = ss / 3600
console.log('el numero de segundos es: ', ss, 'el numero de minutos es: ', minuto, 'las horan son: ', hora)

/*14-Solicite un Angulo al usuario en grados. Diga en que cuadrante está. 
Diga  además en que vuelta está sabiendo que cada 360 grados se completa una  vuelta a la circunferencia.
Además diga el resultado en radianes. */

var n1 = Math.round(Math.random() * 1000)
console.log(n1)

var v1 = n1 / 3
console.log(v1)
var v2 = n1 * 3
console.log(v2)

console.log('la base es: ', v1, 'la altura es: ', v1, 'la profundidad es: ', v1, )
console.log('el volumen del cubo es: ', v2, );


/*15-La fecha de Pascua corresponde al primer domingo después de la primera luna 
llena que sigue al equinoccio de primavera, y se calcula con las siguientes expresiones:
 A= año MOD 19
 B= año MOD 4 
 C= año MOD 7 
 D= (19*A+24) MOD 30
 E= (2*B+4*C+6*D+5) MOD 7 
 N= (22+D+E) 
 En el que N indica el número de día del mes de marzo (o abril si N es superior a 31)
 correspondiente al domingo de Pascua. Realizar un programa que determine esta fecha para un año ingresado por teclado.*/

var año = Math.round(Math.random() * 2022)
console.log(año)
A = año % 19
B = año % 4
C = año % 7
D = (19 * A + 24) % 30
E = (2 * B + 4 * C + 6 * D + 5) % 7
N = (22 + D + E)
console.log(N)