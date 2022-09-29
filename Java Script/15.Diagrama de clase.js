//30-08-2022//

//DIAGRAMAS DE CLASE//

/*Estos diagramas de clase tienen los cuales tiene (Atributos y Metodos).
---Clases : Es la unidad básica que agrupa una colección de objetos que poseen
un tipo de comportamiento.

-Atributos:Los atributos o características de una Clase pueden ser de tres tipos,
definen la visibilidad.

-Metodos :Los métodos u operaciones de una clase son la forma en cómo ésta
interactúa con su entorno, éstos pueden tener las características.

---Public (+):Indica que el atributo será visible tanto dentro como
fuera de la clase, es decir, es accesible desde todos lados.

---Private(-):Private(-): Indica que el atributo sólo será accesible desde dentro
de la clase (sólo sus métodos lo pueden acceder).

---Protected (#):Indica que el atributo no será accesible desde fuera
de la clase, pero si podrá ser accedido por métodos de la clase
además de las subclases que se deriven (ver herencia).

---Sin modificador de acceso ( ):Indica que el atributo será
accesible desde cualquier clase que se encuentre en el mismo
paquete de la clase que contiene al atributo sin modificador de
acceso.
*/

/*RELACIONES CON :

Herencia (Especialización/Generalización)

Agregación y composición:
• Composición: (Por Valor)==== Es un tipo de relacion estatica = La flecha es el del rombo lleno!
• Agregación: (Por Referencia)==== Es un tipo de relacion dinamica = La flecha es el del rombo vacio!
*/

/*
EJEMPLO 

CLASE: Restaurante 
ATRIBUTOS: Pedidos,Clientes.
RELACIONES:
---Restaurante / Pedidos === Flecha con rombo lleno (Dependientes)
---Restaurante / Clientes === Flecha con rombo vacio (No dependientes)

Es decir que :
Esto indica que el Restaurante tiene Pedidos y Clientes, sin
embargo, los Pedidos requieren del Restaurante para poder existir
(Composición), mientras que los Clientes no (Agregación).
*/

/*
Cuando un objeto no depende del otro su une con una liinea recta ________________________________ */
/*
Cuando un objeto depende del otro se una con una linea intermitente -----------------------------  */