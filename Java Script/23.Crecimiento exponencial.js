//20-09-2022//

//CRECIMIENTO EXPONENCIAL EN JAVA SCRIPT

//EJERCICIOS PARA MODELAR LA FORMULA 

//Primer ejercicio

//Generar una funcion donde su forma aleatoria sea entre 1000 y 10000 habitantes 

/*
n=numero poblacional
tasa =es el valor de la tasa de crecimiento
tiempo = tiempo en años */

function crecimientoPoblacional(tiempo) {
    let n = Math.round((Math.random() * 10000 - 1000) + 1000)
    contador = 0
    let tasa = 0.3
    for (i = 0; i < tiempo; i++) {
        contador = contador + 1
        let resultado = n * (1 + tasa) ** i
        console.log('El tiempo equivale a: ', contador, 'El numero de poblacion actual es:', resultado)

    }
}
crecimientoPoblacional(5);



//Segundo ejercicio

//-Luego que me incremente el dato  del crecimiento de la poblacion en 20 años 

function tasa(tiempo) {
    let num = Math.round((Math.random() * 10000 - 1000) + 1000)
    contador = 0
    for (i = 0; i < tiempo; i++) {
        contador = contador + 1
        let na = ((Math.random() * 10 - 1) + 1)
        let nacimientos = num * na / 100
        let mu = ((Math.random() * 10 - 1) + 1)
        let muertes = num * mu / 100
        let tasa = nacimientos - muertes / num
        let resultado = num * (1 + tasa) ** i
        console.log('Muertes: ', muertes, )
        console.log('Nacimientos:', nacimientos)
        console.log('Tasa de crecimiento', tasa)
        console.log('el tiempo es', contador, 'El numero de poblacion es', resultado)
    }
}
tasa(4);


//Hacer dos promesas

//Donde al 10 % de la poblacion final se les dara una casa dentro de un setTimeout



let global = 0

function tas(tiempo) {
    return new Promise((resolve) => {

        let num = Math.round((Math.random() * 10000 - 1000) + 1000)
        contador = 0
        setTimeout(() => {
            for (i = 0; i < tiempo; i++) {
                contador = contador + 1
                let na = ((Math.random() * 10 - 1) + 1)
                let nacimientos = num * na / 100
                let mu = ((Math.random() * 3 - 1) + 1)
                let muertes = num * mu / 100
                let tasa = nacimientos - muertes / num
                let resultado = num * (1 + tasa) ** i
                console.log('Muertes: ', muertes)
                console.log('Nacimientos:', nacimientos)
                console.log('Tasa de crecimiento', tasa)
                console.log('el tiempo es', contador, 'El numero de poblacion es', resultado)
                console.log('                                                       ')

            }
        }, 2000);
        resolve('Si se esta ejecutando el programa')
        console.log(resultado)
    })
}

async function casass(tiempo) {
    const casas = await tas(tiempo)
    console.log(casas)
}
casass(2)
console.log(global)



//Calcular el crecimiento neto de la poblacion