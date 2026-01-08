/****** FUNCIONES *******/
/* 
    Son bloques/algoritmos ejecutables y reutilizables.
    Nos permiten crear subprogramas dentro de un programa
    mas grande.

    Estos bloques son inertes a menos que nosotros los 
    invoquemos.

    Como una analogia podemos pensar una funcion como
    una bomba detonable que, sin la aparicion de su correspondiente
    detonador, no podrá explotar.
*/

// // Declaracion de funcion
// function imprimir()
// {
//     console.log("Hola Dani zombie slayer!")
// }

// // Invocacion (o llamado) de funcion
// imprimir()

// // Parametros
// function sumar(a, b)
// {
//     return a + b
// }

// // Argumentos
// console.log(sumar(4)) 

/////////////// SCOPE (ambito/alcance) ////////////

// ELEVACION O HOISTING

// let y const
// let -> permitir
// const -> constante

// const musica = "Pop";

// {
//     const musica = "Rock";
// }

// musica = "Jazz";
// console.log(musica)


/* 
    ¿Cuando nos interesa usar let?
    -> Siempre que pretendamos modificar el valor incial
    de la variable a lo largo del programa.

    ¿Cuando nos interesa usar const?
    -> Para proteger
        -> variables con datos primitivos constantes
        -> referencias al DOM de HTML
        -> un tipo de dato comuesto (objetos, arreglos, funciones)
*/

// Amerita let
let contador = 0;

// Amerita const
const PI = 3.14161892719723
const E = 2.161238971923

// Amerita const
const $button = document.querySelector('button');

