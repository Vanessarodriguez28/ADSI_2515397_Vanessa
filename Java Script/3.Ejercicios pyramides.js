//01-08-2022//

//EJERCICIOS//

/*********************************

Imprima los numeros de 1 a 100 y diga cuales de ellos son multiplos de 7*/


for (let a = 0; a < 100; a++) {
    console.log(a);
    if (a % 7 == 0) {
        console.log('Es multiplo de 7', a);
    }
};


/******************************
 Generar 10 numeros aleatorios que esten en el rango de 1 a 100 (sin incluir el cero). Muestre la suma y el promedio*/


//03-08-2022



function pyramid(numPisos) {
    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
}

pyramid(5);



/************************************************************* */


function generatePyramid() {
    var totalNumberofRows = 5;
    var arr = new Array();
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            arr.push(j);
            console.log(j);
        }
        console.log("\n");
    }
}



/************************************************* */

//Se utiliza la funcion piramide (fuction pyramid) que sirve paraque se muestre en tipo piramide
//Luego utilizo el ciclo for para genenerar el rango 

var numero = Math.round(Math.random(5) * 10);
console.log(numero)

function pyramid(numero) {
    for (var i = 0; i < numero; i++) {
        var n = '*';
        for (var m = 0; m < i + 1; m++) {
            n = n + '*';
        }
        console.log(n)
    }
}
pyramid(numero);


//CICLO FOR //

for (let j = 0; j < 10; j++) {
    var j1 = Math.round(Math.random() * 100)
    console.log(j1)

}
var suma =
    console.log(suma)