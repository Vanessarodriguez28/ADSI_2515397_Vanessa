inventario = []
const tiendaVirtual = require("./tiendaVirtual");
const Persona = require("./Persona");
const login = require("./Login");
const productotv = require("./productotv");
const ventatv = require("./ventastv");
const ventastv = require("./ventastv");
const carrito = require("./carritotv");

/*
let tienda = new tiendaVirtual (454545,'Chopiie')
console.log (tienda)


let log = new login (454545,'Chopiie','Johan Marquez','123456789')
console.log (log)


let prov = new Persona(454545,'Chopiie','Johan Marquez','123456789','CC','1495656','Vanessa July','Rodriguez Rosio','f','rosariotijeras:D.@gmail.com','Cliente')
console.log(prov)


let pro = new productotv (12345,'Jean','Levis',40000,20,2)
console.log (pro)
*/


let carritotv = new carrito('shoppic')
let Jean = new productotv(12345, 'Jean', 'Levis', 40000, 20, 2, '5/09/2022')
let Camisa = new productotv(2345, 'Camisa', 'Levis', 20000, 20, 6, '8/09/2022')
let chaqueta = new productotv(896, 'Chaqueta', 'L y h', 200000, 20, 1, '5/09/2022')
let Jogger = new productotv(33345, 'Jogger', 'Facol', 50000, 20, 2, '1/09/2022')
let Polo = new productotv(12, 'Polo', 'Levis', 40000, 20, 2, '5/09/2022')



//console.log (Jean,chaqueta,Camisa,Jogger,Polo)
inventario.push(Jean, chaqueta, Camisa, Jogger, Polo)
    //
console.log('Inventario', inventario)


// Sumar todos los productos 

function total() {
    total1 = 0
    for (let i = 0; i < inventario.length; i++) {
        total1 += inventario[i]._Precio_p
    }
    console.log('La suma de todos los productos es:', total1)
}
total();


// Asignacion de descuento por marca
function categoria(descuento, Marca) {
    total = 0
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i]._Marca_p == Marca) {
            total += ((inventario[i]._Precio_p) - (inventario[i]._Precio_p * descuento))
        }
    }
    console.log('El producto con el descuento es: ', total, '   De la marca :', Marca)
}
categoria(0.20, 'Levis')

// Presupuesto
function presupuesto(pp) {
    total1 = 0
    for (let i = 0; i < inventario.length; i++) {
        total1 += inventario[i]._Precio_p
    }
    console.log(total1, 'resultado de la suma de los productos')
    if (total1 <= pp) {
        let si = pp - total1
        console.log('si le alcanza y le sobra', si)
    } else {
        let no = total1 - pp
        console.log('le hace falta', no)
    }

}
presupuesto(340000);