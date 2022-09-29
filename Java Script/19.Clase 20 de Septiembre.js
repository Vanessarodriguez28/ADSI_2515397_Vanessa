//arrays con async 

function creacion(largo) {
    array = []
    for (let i = 0; i < largo; i++) {
        array[i] = Math.round(Math.random() * 100)
    }
    return (array)
};

function sumaraarray(cb1, largo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('si funciono :D')
        }, 2000);
        cb1(largo)
        contador = 0
        console.log(array)
        for (let j = 0; j < array.length; j++) {
            contador = contador + array[j]
        }
        setTimeout(() => {
            console.log('La suma del array es: ', contador)
        }, 1000);
    })
};
async function mediaararr(cb1, largo) {
    const media = await sumaraarray(cb1, largo)
    console.log(media)
}
mediaararr(creacion, 5)


//string