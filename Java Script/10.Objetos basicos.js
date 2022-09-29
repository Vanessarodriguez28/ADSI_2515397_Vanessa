//23-08-2022//

//APUNTES DE LA CLASE//

/*class producto {

}

var producto1 = new producto ();
console.log(typeof(producto1));
*/

//OBJETOS LITERALES

//objetos
var Persona = {
    nombre: 'Pedro Perez',
    identificacion: 12345,
    datosCompletos: () => console.log(`${Persona.nombre} $
    {persona.identificacion}`),
}
console.log(Persona.nombre)
console.log(Persona['identificacion'])
Persona.datosCompletos();
console.log(Persona)

//agregar
Persona.direccion = 'cra con calle pai'
console.log(Persona.direccion)

//actualizar
Persona.nombre = 'Johan Marquez'
console.log(Persona)

//borrar
delete Persona.identificacion;
console.log(Persona)



//cuadrado
var cuadrado = {
    nombre: 'cuadrado',
    num_lados: 4,
    perimetro: function(l) {
        let a = l * 4
        console.log('el perimetro es: ', a)
    },
    areacua: function(l) {
        let ar = l * l
        console.log('el area es: ', ar)
    }
}

console.log(cuadrado)
cuadrado.perimetro(2)
cuadrado.areacua(2)


//rectangulo
var rectangulo = {
    nombre: 'rectangulo',
    nrolado: 4,
    perimetro: function(l1, l2, l3, l4) {
        pp = l1 + l2 + l3 + l4
        console.log('el perimetro es: ', pp)
    },
    arearec: function(l3, l4) {
        aaa = l3 * l4
        console.log('el area es: ', aaa)
    }
}

console.log(rectangulo)
rectangulo.arearec(2, 3)
rectangulo.perimetro(2, 4, 4, 2)


//triangulo

var triangulo = {
    nombre: 'triangulo',
    nro_lados: 3,
    perimetro: function(l1, l2, l3) {
        pp = l1 + l2 + l3
        console.log('el perimetro es: ', pp)
    },
    areatri: function(l1, la) {
        ard = l1 * la
        ar = ard / 2
        console.log('el area del triangulo es: ', ar)
    }
}

console.log(triangulo)
triangulo.perimetro(1, 2, 3)
triangulo.areatri(1, 2)

//rombo
var rombo = {
    nombre: 'rombo',
    nro_lados: 4,
    perimetro: function(l1, l2, l3, l4) {
        sum = l1 + l2 + l3 + l4
        console.log('el perimetro es: ', sum)
    },
    arearom: function(l1, an) {
        arrombo = l1 ** 2 * an
        console.log('el area del rombo es: ', arrombo)
    }
}
console.log(rombo)
rombo.perimetro(2, 2, 4, 4)
rombo.arearom(2, 4)

// funcion que reciba como parametro un objeto y decir si es una circuferencia