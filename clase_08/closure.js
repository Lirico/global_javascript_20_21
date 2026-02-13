/********** CIERRE / CLOSURE *********/

/* 
    El cierre me permite de alguna manera acceder a una copia del valor de una variable sin poder acceder
    a la variable directamente.
*/

// function crearSaludo(saludo){
//     return function(usuario){
//         return `${saludo} ${usuario}`
//     }
// }

// const saludar = crearSaludo("Hola")
// const despedir = crearSaludo("Hello")

// console.log(saludar("Jorge"));
// console.log(saludar("Maga"));
// console.log(saludar("Nata"));
// console.log(despedir("Nacho"));
// console.log(despedir("Bruno"));


/***************** EL DILEMA DEL CONTADOR  ******************/

// function incrementar(){
//     let contador = 0;

//     return function(){
//         return contador += 1
//     }
// }


// const add = incrementar()

// console.log(add)
// console.log(add())
// console.log(add())
// console.log(add())


// function crearContador() {
//   let count = 0;
//   return {
//     incrementar: () => ++count,
//     obtener: () => count,
//     reset: () => count = 0
//   };
// }

// const miContador = crearContador();

// console.log(miContador.incrementar())
// console.log(miContador.obtener())
