//ESTRUCTURAS DE CONTROL

//Ejemplo 1 if and else

/*
var KG;
var VR;
var KS;
const edad = 18;

if (edad >= 18){
    console.log("KG es un adulto");
    console.log("VR es un adulto");
    console.log("KS es un adulto");
}

else {
    console.log("KG es un niño");
    console.log("VR es un niño");
    console.log("KS es un niño");     

}*/

//Ejemplo 2 else if 

/*const edad = 18;

if (edad < 18 ) {
    console.log("Alice es menor de 18 ");}
 else if (edad >= 18 && edad <= 21) 
 {console.log ("Alice tiene entre 18 y 21 anios de edad")}
 else {
    console.log ("Alice tiene mas de 21 anios ");
 }*/

// if es true - else es falso

/*Cuando se usa else?
En inglés "if" significa "si" (condición) y "else" significa "si no". */

/*cuando se usa corchetes?
Es cuando se denomina un conjunto de objetos  ya sea tipo  de datos como texto o numero-cuando tiene mas de una linea de. */

/*var persona = {
  nombre: "Germán",
  apellido: "Escobar",
  edad: 35,
  estatura: 1.8
}*/

//Anidamiento-anidacion-----que sea neutro o sea que el valor sea 0

/* x=-89
console.log(x)
if(x>0){
    console.log("Positivo")
} else if (x<0){
    console.log("Negativo")
} else {
    console.log("Cero")
} */


//OTROS EJEMPLOS 

/*var x =Math.round(Math.random()*100);
console.log(x)
if(x%5==0){
    console.log('si es multiplo de 5')
}*/

/*var x =Math.round(Math.random()*100);
console.log(x)
if(x%2==0){
    console.log('Es Par')
}else{
    console.log('Es Impar')
}*/

/*Genere dos numeros aleatorios y diga si b es factor de a.

var x =Math.round(Math.random()*100);*/

//Genere dos numeros aleatorios A y B y diga cual de los dos numeros es mayor o son iguales 

/*var x =Math.round(Math.random()*100);

var a = 12;
var b = 60;
 if (a>b){
    console.log('es mayor')
 }else if (a<b){
    console.log('es menor')
 }else if(a==b)
    console.log('Es igual') */

/*Genere tres numeros aleatorios a,b y c...diga cual es el menor. No utilice operadores logicos  
 
var x =Math.round(Math.random()*100);

var a;
var b;
var c;

if (a<b){
   console.log('Es Menor') 
}
else  if (a>b)
   console.log('Es Mayor') 
*/

//Genere aleatoriamente un valor entre 0 y 100000
//aplique 4 tipos de descuento segun el estrato 
/* estrato 1:50%
   estrato 2 40%
   estrato 3:30%
   estrato 4:20%
   estrato 5:10%
   estrato 6:5% */

/* var V =Math.round(Math.random()*100000)
 var E =Math.round(Math.random()*6)
 console.log(V)
 switch (E) {
     case 1:
         V = V*0.50
         break;
     case 2:
         V = V*0.40
         break;
     case 3:
         V = V*0.30
         break;
     case 4:
         V = V*0.20
         break;
     case 5:
         V = V*0.10
         break;
     case 6:
         V = V*0.05
         break;}
 console.log("su estrato es: "+E+" despues del descuento el valor total es de: "+V)

 /* CICLICAS O REPETITIVAS  O ITERACTIVAS
 (for, while, do while)
 for ->estr  */
//primer elemento del for es una asignacion
//segundo elemento del for es una condicion 
//tercer elemento del for es un contador 
//un contador es una ariable que es igual a la misma variable
//es una constante

// para que el valor no se repita uno mas otro de utiliza el for . que es un contador, etre rango 
/*
   var contador =1;
   contador = contador + 1; //contador++  //Contador +=
   //sumador=sumador+otra variable

   /*

let i;
for (let i = 1 ; i <=10; i=i+1) {
    console.log(i)
    suma=suma+i
   }
   console.log ('la suma es ${suma}') // el resultado debe ir por fuera del bloque del for 
//la expresion ++ sirve para hacerle contador de uno en uno 

for (let j = 0; j <10; j++){
    console.log(Math)
} 
*/