//19-19-2022//

//AWAIT AND ASYNS 
/*asíncrona talk()
tres veces seguidas sin interrupción. Cada una de estas llamadas de función está esperando la
función decir algo(). La función decirAlgo() contiene una nueva Promesa
que se está resolviendo con una función setTimeout() que espera dos segundos antes
resolviendo con el valor de algo más x. Así que después de dos segundos, los tres
las funciones se realizan al mismo tiempo (o eso parece al ojo humano).*/
function decirAlgo(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('algo ' + x)
        }, 2000);
    })
}
//funcion clasica
function decirAlgo(x) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('algo ' + x)
        }, 2000);
    })
}


//decirAlgo(3) 
async function hablar(x) {
    const palabras = await decirAlgo(x);
    console.log(palabras);
}
hablar(2);
hablar(4);
hablar(8)


//funcion flecha

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('something' + x);
        }, 2000)
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);


//funcion clasica


function saySomething(x) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('something' + x);
        }, 2000)
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);


//EJERCICIOS PRACTICOS DEL LIBRO 

//LIBRO 

var cont = 0;

function contar(cont) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            cont = cont + 1
        }, 1000);
        resolve('el contador incrementado es : ' + cont)
    })
}
console.log('el contador global es  :', cont)
async function c(cont) {
    const values = await contar(cont)
    console.log(values)
}
setTimeout(() => {
    for (let i = 1; i < 10; i++) {
        c(i)
    }
}, 2000);