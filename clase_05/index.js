/********** ARRAYS (ARREGLOS) ********/
/* 
    1. Un arreglo representa una coleccion de elementos. Estos elementos
    puede ser tanto de tipo primito como de tipo compuesto.
    2. El array es un elemento de tipo compuesto.
    3. Dentro de esta coleccion cada elemento estará ubicado en una posicion.
    4. Las posiciones se enumeran en forma de indice siempre partiendo desde 0 en 
    adelante.
    5. Para poder acceder a alguno de los elementos es necesario referenciar su
    posicion en la coleccion.

    [libro, libro, libro, libro]
       0      1      2      3
*/

const alumnos = ["Magaly", "Daniel", "Alvaro", "Nacho", "Nataniel", "Agustin"];

// Hay una alumna llamada Patricia que quiso inscribirse
// a la cursada 3 meses tade.

const agregarAlumno = (lista, alumno) => (lista[lista.length] = alumno);

agregarAlumno(alumnos, "Patricia");
agregarAlumno(alumnos, "Roberto");

/* 
    Agregar un elemento al final del array -> array.push()
    Agregar un elemento al comienzo del array -> array.unshift()
    Quitar un elemento del final del array -> array.pop()
    Quitar un elemento del comienzo del array -> array.shift()
*/

// const filtrarAlumnosConLongitud6 = (lista) => {
//     const nuevaLista = []

//     for (const alumno of lista) {
//         if(alumno.length === 6){
//             nuevaLista.push(alumno)
//         }
//     }

//     return nuevaLista
// }

// console.log(filtrar(alumnos))

// MATRICES
/* 
    Un arreglo es en realidad una matriz, pero es una
    matrix de 1xN.

    Quiero interactuar con matrices de NxN.
*/

// const tablero = [
//     ["X","X","O"],
//     ["X","O","X"],
//     ["O","X","O"]
// ]

// Alvaro -> X
// Yo -> O

// const cine = [
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
// ];

// const reservarButaca = (persona, columna, fila) => {
//     if(cine[fila][columna] !== null){
//         console.log( "La butaca esta ocupada");
//     }
//     cine[columna][fila] = persona;
// };

// reservarButaca("Magaly", 3, 4);

// console.log(cine);



// Crear un tablero de 8 x 8 hecho solo con numerales.


const tablero = []

for (let i = 0; i < 8; i++) {
    const fila = []

    for (let j = 0; j < 8; j++) {
        fila.push("#")
    }
    tablero.push(fila)
}

console.log(tablero)