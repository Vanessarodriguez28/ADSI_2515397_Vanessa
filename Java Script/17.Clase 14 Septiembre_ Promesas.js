/*const p = new Promise((resolve, reject) => {
    let x = 11
    setTimeout(() => {
        if (x == 10) {
            resolve('La variable es igual a 10');
        }
    }, 2000);
});

p.then(x => {
    console.log(x)
}).catch(function() {
    console.log('error')
})


//Ejercicio clase 14/09/22
/*la promesa es una función para retorna una promesa*/
function base() {
    return new Promise((resolve, reject) => {
        console.log('Línea de código dentro de la función')
        resolve();
    });
}

base()
    .then(() => {
        console.log('En el then')
    })

//2
function base() {
    return new Promise((resolve, reject) => {
        resolve();
        setTimeout(() => {
            console.log('Línea de código dentro de la función')
        }, 500);
    });
}

base()
    .then(() => {
        console.log('En el then')
    })
    .then(auxliar) //hoisting.
    .catch(error => console.log('....', error))

function auxliar() {
    console.log('Función Auxiliar')
}


//ejemplo peronal 
/*
const somethingWillHappen = () => {
    let x = 10;
    return new Promise((resolve, reject) => {
        if (x >= 11) {
            resolve('ok!');
        } else {
            reject('whoops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function base() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
            setTimeout(() => {
                console.log('Línea de código dentro de la función')

            }, 1000);
        } else {
            reject();
        }
    });
}

base()
    .then(() => {
        console.log('En el then')
        return 1000;
    })
    .then((dato) => {
        console.log('En el then 2 recibido', dato)
    })
    .then(auxliar) //hoisting.
    .catch(error => console.log('.....error'))

function auxliar() {
    console.log('Función Auxiliar')
}

/*
 */