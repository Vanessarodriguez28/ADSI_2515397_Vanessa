/******************************************************************** */

/*VECTORESSSSS 08-08-22*/


/*let vector = []; //arreglo vacio
vector[0] = 100;
vector[1] = 50;
vector[2] = 'sena';
vector[4] = 30;

console.log(vector);*/

//otra forma de crear arreglos en JS
/*
let vec= new Array();
vec[0]='yo';
vec[0]='amo';
vec[0]='programar';
console.log(vec)
vec[3]=[1,2,3]
console.log(vec)*/

//llenar arreglos*/
/*
let vector = []
let tam = Math.round((Math.random() * 20 - 10) + 100);
console.log('valor de variable tam:${tam}');

for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100);
console.log(vector);
console.log('tamaño del vector:${vector.length}');
}
for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
        console.log('${vector[i]} es par')
    } else {
        console.log('${vector[i]} es impar')
    }

}*/
//pow elevar al cuadrado
/*
let cuadrados = []
let raices = [];
for (let i = 0; i < vector.length; i++) {
    cuadrados[i] = Math.pow(vector[i], 2);
}
console.log(cuadrados);

for (let i = 0; i < vector.length; i++) {
    raices[i] = Math.sqrt(vec,41
[i]);
}
console.log(raices);*/


/*1- Sumar todos los elementos de un arreglo*/
/*
let v=[],
t=Math.round((Math.random()*20-10)+10),
s=0
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let i = 0; i < v.length; i++) {
    s = s + v[i]
}
console.log(s)*/

/*2- Promediar los elementos de un arreglo*/
/*
let v=[];
    t=Math.round((Math.random()*20-10)+10);
    s=0;
    p=0;
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let i = 0; i < v.length; i++) {
    s = s + v[i]
}
console.log('la suma es: '+s)
p = s/v.length
console.log('el promedio es: '+p)*/

/*3- Obtener el numero mayor de los elementos de un arreglo*/
/*
let v=[];
    t=Math.round((Math.random()*20-10)+10);
    m=0
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
    if (v[i]>m) {
        m = v[i]
    }
}
console.log(v)
console.log('el numero mayor es: '+m)*/


/*4- Obtener el numero  menor de los elementos de un arreglo*/
/*
let v=[],
    t=Math.round((Math.random()*20-10)+10),
    m=100
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
    if (v[i]<m) {
        m = v[i]
    }
}
console.log(v)
console.log('el numero menor es: '+m)*/

/*6- Buscar un elemento dentro de un arreglo*/
/*
let v=[];
let t=Math.round((Math.random()*20-10)+10);
console.log(`Valor variable tam= ${t}`);

for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
console.log(v)

var x=Math.round((Math.random()*20-10)+10)
if(x in v){
  console.log('El numero se encuentra en la lista ')
}else{
  console.log('El numero no se encuentra en la lista ')
}
*/
/*7- ordenar un arreglo de menor a mayor (algoritmo de la burbuja)*/
/*
var v=[];
t= Math.round((Math.random()*20-10)+10),
a;
console.log('valor variable  tam= ${t}');

for(let i=0; i<t; i++){
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let i = 0; i < v.length; i++){
    for (let i = 0; i < v.length; i++){
        for (let j = i + 1; j < v.length; j++){
            if (v[i],
                v[i])= v[j]
                v[j]=a
        }
    }
}
console.log(v)*/



/*8- ordenar un arreglo de mayor a menor (algoritmo de la burbuja)*/



//Llenar 3 arreglos con numeros aleatorios
//El tamaño de los aleatorios estara entre (min 5, max 20) elementos 
//Cual de los tres arreglos es el mas grande 
//De cada uno diga que cantidad son numeros pares y que cantidad son numeros impares
//Rellenar los dos arreglos mas pequeños con los datos que el arreglo tiene de mas 

var a1 = []
var a2 = []
var a3 = []
let tam = Math.round((Math.random() * 20 - 5) + 5);
console.log('valor de la variable tam:${tam}');

for (let i = 0; i < tam; i++) {
    a1[i] = Math.round(Math.random() * 100)
}

for (let i = 0; i < tam; i++) {
    a2[i] = Math.round(Math.random() * 100)
}

for (let i = 0; i < tam; i++) {
    a3[i] = Math.round(Math.random() * 100)
}


console.log(a1);
console.log(a2);
console.log(a3);
console.log(tam);

if (a1.length > a2.length && a1.length > a3.length) {
    console.log('el arreglo mas grande es a1')
} else if (a2.length > a1.length && a2.length > a3.length) {

} else if (a3.length > a1.length && a3.length > a2.length) {

}

/*
if (a1>a2,a1>a3){
    console.log ('El numero es mayor:');
}
else if (a2>a1,a2>a3){
    console.log ('El numero es mayor:');
}
else if (a3>a1,a3>a2){
    console.log ('El numero es mayor:')
}
*/
for (let i = 0; i > tam.length; i++)
    for (let i = 0; i > tam.length; i++) {
        for (let j = i + 1; j > tam.length; j++) {
            if (x % 2 == 0) {
                console.log('Es Par')
            } else {
                console.log('Es Impar')
            }

        }
    }

var par = 0
var impar = 0


for (let i = 0; i < array.length; i++) {
    const element = array[i];

}

let vector = []
let indice = Math.round((Math.random() * 20 - 10) + 100);
console.log('valor de variable tam:${tam}');

for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100);
    console.log(vector);
    console.log('tamaño del vector:${vector.length}');
}
for (let i = 0; i < vector.length; i++)
    if (vector[i] % 2 == 0) {
        console.log('${vector[i]} es par')
    } else {
        console.log('${vector[i]} es impar')
    }