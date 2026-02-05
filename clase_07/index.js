/********* FUNCIONES DE ORDEN SUPERIOR *********/
/* 
    Una funcion de orden superior (callbacks) son aquellas que reciben
    otra/s funcion/es por parametro.
*/

// function saludar(usuario){
//     return `Hola ${usuario}`
// }

// function despedir(usuario){
//     return `Adios ${usuario}`
// }

// function crearSaludo(usuario, saludo){
//     return saludo(usuario)
// }

// console.log(crearSaludo("Jorge", despedir))




// const frutas = ["Mora", "Manzana", "Banana", "Pera"];

// const filtrar = (lista, condicion) => {
//     const nuevaLista = []

//     for (const elemento of lista) {
//         if(condicion(elemento)){
//             nuevaLista.push(elemento);
//         };
//     };

//     return nuevaLista;
// }

// console.log(filtrar(frutas, fruta => fruta.length === 4))
// console.log(filtrar(frutas, fruta => fruta.length > 4))


// Funciones de orden superior nativas (metodos).
/* 
    - filter
    - find
    - forEach
    - map
    - reduce
    - every
    - some
    - sort
*/

// const frutas = ["Mora", "Manzana", "Banana", "Pera"];


// Filter -> Retorna un arreglo con los elementos filtrados.
// console.log(frutas.filter(fruta => fruta.length === 4))

// Find -> Retorna el elemento que coincide con la condicion.
// console.log(frutas.find(fruta => fruta.length === 4))

// forEach -> Recorre un arreglo pero no retorna nada. En pocas palabras, es un PROCEDIMIENTO.
// frutas.forEach(fruta => fruta)

// map -> Recorre un arreglo y retorna un nuevo arreglo.
// console.log(frutas.map(fruta => "Mondongo"))

// reduce -> Recorre un arreglo, y devuelve un total respecto
// de la operacion entre los elementos del arreglo.

// const numeros = [1,2,3,4,5,6,7]

// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0) 

// console.log(total)


// every -> Recorre un arreglo, y da true si todos los elementos pasan la condicion
// const numeros = [1,2,1,1,1]
// console.log(numeros.every(numero => numero === 1));

// some -> Recorre un arreglo, y da true, si al menos 1 elemento pasa la condicion
// console.log(numeros.some(numero => numero === 2))


// const numeros = [1,3,10,2,4,20,1000,30]
// const meses = ["Enero", "Junio", "Diciembre","Abril", "Marzo"]

// sort -> Ordena los elementos.

// // Orden ascendente
// console.log(numeros.sort((a, b) => a - b));

// Orden descendente
// console.log(numeros.sort((a, b) => b - a));
