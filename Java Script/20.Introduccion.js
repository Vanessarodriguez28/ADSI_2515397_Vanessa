function base() {
    return new Promise(function(resolve, reject) {
        resolve()
        setTimeout(() => {
            console.log('la linea de cidigo dentro de la function')
        }, 500);

    })
}

base()
    .then(() => {
        console.log('en el then .')
    })
    .then(auxiliar)

function auxiliar() {
    console.log('function auxiliar')
}



//PASAR ESTAS FUNCIONES CON PROMISE --------//

function trabajoArreglos(cb1, cb2) {
    let vec = []
    setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec = cb1(vec);
    console.log(cb2(vec));
}

// function cualquierFunction(vec){
//     console.log(`El parametro es de tipo ${typeof(vec)}`)
//     return [];
// }

function llenaArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 100)
    }
    return vec;
}

function sumarArreglo(vec) {
    let suma = 0
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    return suma;
}

trabajoArreglos(llenaArreglo, sumarArreglo);
//promesi
function arreglo() {
    {
        return new Promise((resolve, reject) => {
            ñ
            let vector = [];
            let tamaño = Math.round((Math.random() * 20 - 10) + 10);
            console.log('valor de la variable tam', tamaño)
            for (let i = 0; i < tamaño; i++) {
                vector[i] = Math.round(Math.random() * 100);
            }
            console.log(vector)
            resolve(vector)
        })
    }
}
/*function sum (){  
    let sum=0 
    for (let i =0; i < vector.length; i++){
        sum +=vector[i]
    } console.log('la suma de los elementos es ',sum)

}*/
arreglo()
    .then((vector) => {
        let sum = 0
        for (let i = 0; i < vector.length; i++) {
            sum += vector[i]
        }
        console.log('la suma de los elementos es ', sum)

    })


// Mayusculas y Minusculas con promesas

var cade = 'VanEssaRodrIGUEz'

function contarMayusculas(cade) {
    {
        return new Promise((resolve, reject) => {
            var contar = 0;
            var mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            var as = cade.split('')
            for (let i = 0; i < as.length; i++) {
                for (let x = 0; x < mayusculas.length; x++) {
                    if (as[i] == mayusculas[x]) {
                        contar += 1;
                    }
                }
            }
            setTimeout(() => {
                resolve(cade)
                console.log('la cadena a evaluar de cuantas mayusculas tiene es :  ', cade)
                console.log('el numero de mayusculas que tiene es de : ', contar)
            }, 0);

        })
    }
}
contarMayusculas(cade)
    //console.log('el total de mayusculas es de',contarMayusculas())

.then((cade) => {
    let contar = 0;
    let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let as = cade.split('')
    for (let i = 0; i < as.length; i++) {
        for (let x = 0; x < minusculas.length; x++) {
            if (as[i] == minusculas[x]) {
                contar += 1;
            }
        }
    }
    setTimeout(() => {
        console.log('la cadena a evaluar de cuantas minusculas tiene es :  ', cade)
        console.log('el numero de minusculas que tiene es de : ', contar)
    }, 3000);
    return cade
})

// 
.then((cade) => {
        setTimeout(() => {
            let pas = cade.toUpperCase()
            console.log('cadena pasada a mayusculas : ', pas)
        }, 1000);
        return cade
    })
    .then((cade) => {
        setTimeout(() => {
            let p = cade.toLowerCase()
            console.log('la cadena pasada a minusculas :', p)
        }, 4000)
        return cade
    })

//contarMayusculas(cade)


//console.log('las minusculas de la cadena',Minusculas())


// EJERCICIO LIBRO 
const promise = new Promise((resolve, reject) => {
        resolve("success!");
    })
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
    // 1 Contador 

const promesi = new Promise((resolve, reject) => {
    resolve('Empezar a contar ')
})

.then((valor) => {
    console.log(valor)
    return 'uno'
})

.then((valor) => {
    console.log(valor)
    return 'dos '
})

.then((valor) => {
    console.log(valor)
    return 'tres '
})

.then((valor) => {
    console.log(valor)
    return 'cuatro '
})