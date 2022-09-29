//20-09-2022//

//Ejercicios 
//Ponerles asyng y await a los ajercicios de los ejercicios trabajados


//Funcion llenar arreglo con asyng y await
//ejercico de array 

function llenarArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 50)
    }
    return vec;

}


async function n(vec) {
    const values = await trabajoArreglos(cb1, cb2, vec)
    console.log(values)

    let vector = []
    llenarArreglo(vector);

    function trabajoArreglos(cb1, cb2) {
        return new Promise((resolve) => {
            let vec1 = []
                (cb1(vec1));
            (cb2(vec1));
            setTimeout(() => {
                resolve('Si se esta ejecutando el programa ', vec1, 'la suma del arreglo es:', cb1, 'el promedio del arreglo es:', cb2)
            }, 2000);


        })
    }

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



    //Ejercicio Mayusculas y minusculas con asyng y await 

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
                    console.log('la cadena a evaluar para imprimir cuantas mayusculas tiene:  ', cade)
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
            async function v(cade) {
                const values = await contarMayusculas(cade)
                console.log(values)
            }

            setTimeout(() => {
                console.log('la cadena a evaluar de cuantas minusculas tiene es :  ', cade)
                console.log('el numero de minusculas que tiene es de : ', contar)
            }, 3000);
            return cade
        }

    )


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