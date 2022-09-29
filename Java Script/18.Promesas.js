//EJERCICIOS

/*Funcion general. Tiene dos callback. Uno que cuenta letras mayusculas de un string y otro que cuenta minusculas. La cadena de text se debe ingresar como parametro a la misma funcion general.
La funcion general imprime la cadena de texto en minuscula y en mayuscula. Tenga cuidado de no perder la conformacion original de la cadena.*/

//Funcion llenar arreglo

function llenaArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 100)
    }
    return vec;
}
let vector = []
llenaArreglo(vector);
//console.log(vector);

function trabajoArreglos(cb1, cb2, vec) {
    let vec1 = []
    vec1 = vec;
    console.log(cb1(vec1))
    setTimeout(() => {
        console.log(vec1)
    }, 2000);

    console.log(cb2(vec1));
}

// function cualquierFunction(vec){
//     console.log(`El parametro es de tipo ${typeof(vec)}`)
//     return [];
// }


function sumarArreglo(vec) {
    let suma = 0
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    return suma;
}

function promedioArreglo(vec) {
    suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    return suma / vec.length;
}

trabajoArreglos(sumarArreglo, promedioArreglo, vector);



/********************************************************************************** */


//string='AUMLopukI'
//console.log(string.toLowerCase())
contador1 = 0
contador2 = 0
mayusculas = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z'
minusculas = 'a,b,c,d,e,f,g,h,i,j,k,l,m,ñ,o,p,q,r,s,t,u,v,w,x,y,z'

function general(cb1, cb2, string) {
    cb1(string)
    cb2(string)
    cb1 = string.toLowerCase()
    cb2 = string.toUpperCase()

    setTimeout(() => {
        console.log(cb1)
    }, 2000);
    setTimeout(() => {
        console.log(cb2)
    }, 3000);
    setTimeout(() => {
        console.log(string)
    }, 4000);

}


function letrasMayusculas(string) {
    for (let i = 0; i < mayusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] == mayusculas[i]) {
                contador1++
            }

        }

    }
    console.log(`Tiene ${contador1} letras Mayusculas`)
}

//letrasMayusculas('AUMLopukI')

function letrasMinuscula(string) {
    for (let i = 0; i < minusculas.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] == minusculas[i]) {
                contador2++
            }

        }

    }
    console.log(`Tiene ${contador2} letras Minusculas`)
}
//letrasMinuscula('AUMLopukI')

general(letrasMayusculas, letrasMinuscula, 'VaNeSsA RoDrIgUeZ')



/******************************************************************************* */


//EJERCICIOOS CON PROMESAS


//Funcion llenar arreglo
//ejercico de array 

function arreglo() {
    {
        return new Promise((resolve, reject) => {
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
async function v(vector) {
    const vec = await arreglo()
    console.log(vec)
    let sum = 0
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i]
    }
    console.log('la suma de los elementos es ', sum)

}


//Ejercicio mayusculas y minusculas con promesas

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