/* 
    OBJETOS

    Los objetos son tipos de datos compuestos al igual
    que los arreglos. Esto significa que se accede a sus
    valores por referencia.

    Estos representan un elemento de la realidad o de la
    ficcion, y nos permiten definir caracteristicas y acciones
    de ese elemento.

    Coche
        -> marca, color, modelo
        -> frenar, acelerar, arrancar

    Para poder recorrer un objeto, recorremos a travez
    de sus claves (propiedades) en lugar de un indice
    como en los arreglos.

    Dentro de los paradigmas de programacion que exiten:
        - Programacion estructurada
        - Programacion imperativa
        - Programacion funcional
        - Programacion orientada a objetos
*/

const coche = {
    marca: "Peugeot",  
    modelo: "Megane",
    color: "Rojo",
    plan: {
        base: 10000,
        medio: 20000,
        cheto: 30000
    }
}

// // Dotwalking
// console.log(coche.plan.medio)

// // Bracket Notation
// console.log(coche["plan"]["cheto"]) 



// const pepe = {
//     nombre: "Pepe",
//     edad: 68,
//     saludar: function(saludo) {
//         console.log(saludo) 
//     },
//     chamuyar: function(chamuyo) {
//         console.log(chamuyo) 
//     },
//     despedir: function(despedida) {
//         console.log(despedida) 
//     },
//     golpear: function(personaje) {
//         personaje.vida -= 10
//     }
// }

// const maria = {
//     nombre: "Maria",
//     edad: 65,
//     vida: 90,
//     saludar: function(saludo) {
//     },
//     chamuyar: function(chamuyo) {
//         console.log(chamuyo) 
//     },
//     despedir: function(despedida) {
//         console.log(despedida) 
//     },
//     chancletazo: function() {
//         console.log("Plashhhh")
//     }
// }

// pepe.saludar("Hola Maria!! Como estas?")
// maria.saludar("Todo bien, y vos?")
// pepe.saludar("Muy bien por suerte.")
// maria.chamuyar("Sabes que el otro dia me acorde de vos...")
// pepe.chamuyar("¿Por que?¿Estuviste viendo HBO?")
// maria.chamuyar("No ni idea.")
// pepe.despedir("Bue, chau che.")


// function agregarPropiedad(objeto, propiedad, value){

//     if(objeto.hasOwnProperty(propiedad)){
//         return "La propiedad ya existe en el objeto"
//     }

//     objeto[propiedad] = value

//     return objeto
// }

// console.log(agregarPropiedad(coche, "color", "Rojo"))
// console.log(agregarPropiedad(coche, "anio", 1995))

// function eliminarPropiedad(objeto, propiedad){
//     delete objeto[propiedad] 

//     return objeto
// }

// console.log(eliminarPropiedad(coche, "marca"))



// const persona = {
//     nombre: "Jorge",
//     edad: 30,
//     genero: "Masculino"
// }

// Hay un bucle pensado para recorrer objetos.
// Se llama forin

// for (const propiedad in persona) {
//     console.log(persona[propiedad])
// }

const alumnos = [
  {
    nombre: "Luffy",
    matematicas: "Pendiente",
    historia: "Pendiente",
    lengua: "Pendiente",
  },
  {
    nombre: "Nami",
    matematicas: "Pendiente",
    historia: "Pendiente",
    lengua: "Pendiente",
  },
  {
    nombre: "Soro",
    matematicas: "Pendiente",
    historia: "Pendiente",
    lengua: "Pendiente",
  },
];

const cargarNota = (listaAlumnos, materia, nota, nombre) => {
    for (const alumno of listaAlumnos) {
        if(alumno.nombre === nombre){
            for (const propiedad in alumno) {
                if(propiedad === materia){
                    alumno[propiedad] = nota;
                }
            }
        }
    }
}

cargarNota(alumnos, "matematicas", 6, "Nami")

console.log(alumnos)