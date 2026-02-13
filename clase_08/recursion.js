/*********** RECURSION ************/
/* 
    Una recursion es una funcion que se llama a si misma
    una y otra vez hasta que deja de cumplirse una condicion.
*/

// function cuentaRegresiva(numero){ 

//     console.log(numero)

//     if(numero > 0){
//         cuentaRegresiva(numero - 1)
//     }
// }


// cuentaRegresiva(3)



// Potencia
// function potencia(base, exponente){
//     // Caso base
//     if(exponente === 0){
//         return 1;
//     }

//     return base * potencia(base, exponente - 1);
// }   


// Secuencia de fibbonacci
//  Fn = Fn-1 + Fn-2 tal que n >= 2.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
function F(n){
    // Caso base
    if(n <= 1) return n;
    
    return F(n - 1) + F(n - 2)
}




// console.log(F(0))
// console.log(F(1))
// console.log(F(2))
// console.log(F(3))
// console.log(F(4))
console.log(F(50))

