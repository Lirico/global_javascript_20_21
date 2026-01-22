////////////// TIPOS DE FUNCIONES ////////////////


// 1. IMPORTACIONES DE MODULOS
// 2. DECLARACION DE VARIABLES GLOBALES
// 3. DECLARACIONES DE FUNCIONES
// 4. INVOCACIONES DE FUNCIONES


// // FUNCION DECLARADA
// function sumar(a, b){
//     return a + b
// }

// // FUNCIONES EXPRESADAS
// const restar = function(a, b){
//     return a - b
// }

// // FUNCION FLECHA (ARROW FUNCTION)
// const multiplicar = a => a * 4


// console.log(multiplicar(3,3))





/* 
    Nos encontramos Howarts para la celebracion de eleccion de nuevos
    magos para las casas del colegio. Desafortunadamente el sombrero
    seleccionador se enfermó, y nos pidieron que programemos una funcion
    que simule el trabajo del sombrero de tal modo que cuando reciba
    determinadas caracteristicas de un mago, lo envie a la casa correspondiente.
*/

// const valienteYAtrevido = 1;
// const justicieroYAmable = 2;
// const argumentativoYAnalitico = 3;
// const astutoEInescrupuloso = 4;

// const magoAleatorio = Math.ceil(Math.random() * 5)

// const sombreroSeleccionador = (test) => {
//     switch(test){
//         case valienteYAtrevido: 
//             return "Griffindor"
//         case justicieroYAmable:
//             return "Hufflepuff"
//         case argumentativoYAnalitico:
//             return "RavenClaw"
//         case astutoEInescrupuloso:
//             return "Slytherin";
//         default:
//             return "Azkaban"
//     }
// }

// console.log(sombreroSeleccionador(magoAleatorio))




// FUNCION -> Un algoritmo que opera con el objetivo de retonar un valor
// function sumar(a, b){
//     return a + b
// }


// PROCEDIMIENTO -> Un algoritmo que opera para ejecutar una accion concreta
// Pero... no retorna nada.

// Busca tal elemento en el document HTML
// const $p = document.querySelector('p');


// function insertarTexto(elementoHTML, texto){
//     elementoHTML.textContent = texto;
// }

// console.log(insertarTexto($p, "Me gusta el pancito"))



/////////// PILA DE LLAMADOS (CALL STACK) ////////

console.log("Instruccion 1") // 32 - 54 ms
console.log("Instruccion 2")
console.log("Instruccion 3")
console.log("Instruccion 4")
console.log("Instruccion 5")