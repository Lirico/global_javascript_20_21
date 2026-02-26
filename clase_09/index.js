//////////// CLASES Y PROTITPOS ////////////


// let nombre = "Jorge"

// Constructores
// let nombre2 = new String("Jorge")
// let numero = new Number(234)

// String(), Number(), Boolean()...

// let objeto = {}

// console.log(nombre)
// console.log(nombre2)
// console.log(numero)
// console.log(objeto)

/* 
    ¿Cual es la diferencia entre un array y string?

    Un string es una coleccion inmutable.
    Puedo acceder a alguno de sus caracteres por poscion.
    Pero, no puedo cambiarlos de lugar, recorrerlos etc.

    Un array es una coleccion mutable.
*/


/////// FUNCIONES CONSTRUCTORAS ///////
////// Subtema -> this ///////

// this es una palabra reservada para hacer referencia al scope
// donde quiero buscar.

// let nombre = "Bienvenidos al ambito global";


// const objeto = {
//     nombre: "Contexto del objeto",
//     imprimir: function() {
//         console.log(this.nombre);
//     }
// };

// const objeto2 = {
//     nombre: "Contexto del objeto 2",
//     imprimir: objeto.imprimir
// }

// objeto2.imprimir()


// function Jedi(nombre, edad, arma, frase){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.arma = arma,
//     this.frase = frase,
//     this.decirFrase = function() {
//         return frase
//     }
// }


// const yoda = new Jedi("Yoda", "Desconocido", "Sable Laser Verde", "Si ganar en dolares tu quieres, laburar para afuera tu debes.");
// const maceWindu = new Jedi("Mace Windu", "Depende de las arrugas de la pelada", "Sable Laser Violeta", "Nooooooooooooooooo");

// console.log(yoda);
// console.log(maceWindu);


// class Persona {
//     constructor(nombre, brazos, piernas, frase){
//         this.nombre = nombre;
//         this.brazos = brazos;
//         this.piernas = piernas;
//         this.frase = frase;
//     }

//     decirFrase(){
//         return this.frase
//     }    
// }

// const magaly = new Persona("Magaly", 2, 2, "Ni idea, no se");

// const messi =new Persona("Messi", 2, 3, "Anda palla bobo");

// class Empleado extends Persona { 
//     constructor(nombre, brazos, piernas, frase, salario, aguinaldo){
//         super(nombre, brazos, piernas, frase)
//         this.salario = salario;
//         this.aguinaldo = aguinaldo;
//     }

//     decirFrase(){
//         return this.frase
//     }  
// }

// class Producto {
//     constructor(id, nombre, precio, cantidad){
//         this.id = 7812378123
//         // precio
//         // nombre
//         // cantidad
//     }

//     agregar(id){

//     }

//     listaDeFavoritos(){

//     }

// }

// class Consola extends Producto {
//         constructor(id, nombre, precio, cantidad){
//         this.id = 7812378123
//         // precio
//         // nombre
//         // cantidad
//         this.bits = 
//     }
// }