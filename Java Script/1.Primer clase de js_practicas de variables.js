//Manejo de Variables
var nombre = 'Vanessa';
console.log(nombre);
console.log(typeof(nombre));

var edad = 18;
console.log(edad);
console.log(typeof(edad));

edad = 'cinco';
console.log(edad);
console.log(typeof(edad));


var sueldo = 1980.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tienetrabajo = false;
console.log(tienetrabajo);
console.log(typeof(tienetrabajo));


var puestodetrabajo;
console.log(puestodetrabajo);

puestodetrabajo = null;
console.log(puestodetrabajo); //manejo de variables

/*********************************************************************************************/


// significa una sola linea de comentario

/* este se utiliza cuando intervienen mas lineas de comentario*/

/*********************************************************************************************/

//operadores matematicos +, -, *, /

var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

//Para definir variables no se utiliza la letra ñ por es se utiliza year

edadAna = 34;
edadMaria = 28;
yearActual = 2019;

//resta

diferenciaEdad = edadAna - edadMaria;

//suma

sumaEdades = edadAna + edadMaria;

// se sabe en que año nacieron 

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);

// estos valores no son numericos, concatena los valores y da un string tomandolo como una sola cadena
console.log('Año en que nacio Ana: ' + yearAna);
console.log('Año en que nacio Maria: ' + yearMaria);

console.log(yearActual * 5);
console.log(yearActual / 2);
/**********************************************************************************************************/
/*Operadores logicos (<, >, <=, >=, ==)
unarios y de asignacion
*/

// Logicos
var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

// comparacion

//Mayor verdadero 
var mayorAna = edadAna > edadMaria;
console.log(mayorAna);

//Menor Falso
var mayorAna = edadAna < edadMaria;
console.log(mayorAna);

//operador de negacion (!)
var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

// operadores Unarios: (++) Incremento: le suma uno, (--) Decremento
edadAna++;
console.log(edadAna);
//operador unario aplica la variable despues de la edad
console.log(edadAna++);
console.log(edadAna);
// se da de dos maneras
console.log(++edadAna);
console.log(edadAna);
//Decremento resta 1
edadAna--;
console.log(edadAna);

// se prensentan los diferentes casos para los dos usos, ¡CUIDADO!

// Operadores de Asignacion (+=, -=, *=, /=, %=(modulo))

var a = 12;
var b = 5;

var c = a % 5; // da el residuo o el resto de una division
console.log(c);

//se hace de una forma mas directa las operaciones
a += b;
console.log(a);
// acortacion de codigo 

/*****************************************************************************************************/