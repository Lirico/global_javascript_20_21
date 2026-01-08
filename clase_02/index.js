

/********* COERCION DE TIPOS DE DATOS ********/
/* 
    Cuando realizamos una operación binaria, si alguno de los tipos de datos
    que participan en dicha operación no corresponde al tipo esperado,
    JavaScript transformará (obligará a transformarse) a dicho valor en el tipo
    necesario para poder operar.
*/

var cadena = "hola";
var numero = 2;
var booleano = false;

// Concatenacion (Union de dos strings)
// console.log(numero + cadena) // "2Hola"

// Coerciona el booleano a number para poder operar la suma
// console.log(numero + booleano)

// console.log(numero - cadena)



////////////////////////////////// ESTRUCTURAS DE CONTROL DE FLUJO /////////////////////////////////

/*  CrearPastafrola
    INICIO

        Si(hayManteca -> true) entonces {
            poner 125g de manteca
        } sino {
            poner 125g de margarina 
        }
        125 gr azúcar
        1 huevo
        ralladura de 1/2 limón
        esencia de vainilla
        250 gr harina leudante
        600 gr dulce de membrillo

    FIN
*/

// ESTRUCTURA IF ELSE EXCLUYENTE
// var llueve = true;

// if(llueve){
//     console.log("Me quedo jugando al lolcito");
// } else {
//     console.log("Me voy a andar en rolers");
// }


// ESTRUCTURA IF NO EXCLUYENTE
// var lunes = false;
// var viernes = false;
// var domingo = true;

// if(lunes || domingo) {
//     console.log("Desayuno saludable")
// }
// if(viernes || domingo){
//     console.log("Hago un asadito")
// }



// Estructura excluyente multicondicional
// var numero = 10;

// if(numero > 10)
// {
//     console.log("Mayor que 10")
// } 
// else if(numero < 10) 
// {
//     console.log("Menor que 10")
// } 
// else 
// {
//     console.log("Igual a 10")
// }


// ESTRUCTURA SWITCH - CASE
// var producto = 5;

// switch(producto){
//     case 1:
//         console.log("Tesito");
//         break;
//     case 2:
//         console.log("Cafecito")
//         break;
//     case 3:
//         console.log("Agüita")
//         break;
//     case 4:
//         console.log("Energizante")
//         break;
//     default:
//         console.log("Caramelo media hora")
// }


// BUCLES DE REPETICION

// var contador = 0;

// while(contador < 5) 
// {
//     console.log(contador)
//     contador++
// }

// do 
// {
//     console.log(contador + " Do While")
//     contador++
// } while(contador < 5)

// var intentos = 0;

// do {
//     var contraseña = prompt("Ingrese su contraseña: ")
//     intentos++
//     console.log("Acceso Denegado")
// } while(contraseña !== "123" && intentos < 3)

// if(contraseña === "123"){
//     console.log("Ha accedido con exito")
// } 
// if(intentos === 3){
//     console.log("Maximo de intentos excedido. Su cuenta ha sido restriginda por 24 hs.")
// }


///////////// BUCLE PARA (FOR) //////////


// for (var contador = 0; contador < 5; contador++) {
//     console.log(contador)
// }

/* 
    Dani se encuentra en un hospital abandonado en el medio
    de un apocalipsis zombie. El lugar carece de luz, y Dani
    tiene en sus manos unicamente una linterna y una pistola.
    La pistola tiene N balas. Dani está buscando provisiones
    y decide ingresar a una de las habitaciones del hospital.
    Al abrir la puerta se encuentra con 10 zombies que se dan
    la vuelta para mirarlo. 
    Afortunadamente Dani tiene el cheat para que cada bala
    impacte directo en la cabeza de un zombie, pero... no puede
    matar mas de uno con la misma bala.

    Programar una secuencia que nos indique si Dani sobrevive
    o falla y muere y le comen los deditos del pie.
*/

var balas = Math.round(Math.random() * 19);

for (let zombies = 10; zombies > 0; zombies--) {
    balas--
}

if(balas >= 0){
    console.log("You survived, mission complete!")
} else {
    console.log("You died, mission failed!")
}


// Instructivo para el uso de libreria Math
/* 
    Math es una libreria de funciones matematicas.
    Puedo realizar desde potencias y raices cuadradas, hasta
    redondeos, cos, sen, y generacion aleatoria de numeros.

    Math.random() genera numeros aleatorios entre 0 y 1.
    Multiplicar el resultado de Math.random() por un numero
    cualquiera hace que el rango de 0 a 1 se extienda hasta
    el numero por el cual fue multiplicado.

    Math.round() redondea un numero flotante a entero. El numero
    que redondea es el que reciba dentro de los parentesis
    de ejecicion de la funcion.
*/