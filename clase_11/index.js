
const d = document;

const $button = d.querySelector("button");


function imprimir() {
    console.log("Me gusta el pancito")
}

// $button.onclick = imprimir;

/*
    ¿Qué otros eventos hay disponibles?

    onclick -> click izquierdo
    contextmenu -> click derecho
    onmouseover -> es un hover
    onmouseout -> cuando saco el mouse de arriba del elemento

    onscroll -> cuando movemo la ruedita
    onresize -> cuando redimensionamos la ventana del navegador

    onchange -> cuando se detecta un cambio en un elemento de formulario
    onsubmit -> cuando se detecta que se oprimio el botoncito de type submit

    DOMContentLoaded -> cuando el dom esta cargado
    onload -> cuando todo el sitio esta cargado

    onkeypress -> cuando mantenemos apretada una tecla del telcado tal
    onkeydown -> cuando bajamos una tecla
    onkeyup -> cuando soltamos una tecla
*/

// Una metodo del dom para elegir que evento queremos usar y la funcion
// que queremos pasarle.


// COUNTER STRIKE SIMULADO EN LA CONSOLA 
const $btnGo = d.createElement("button");
$btnGo.textContent = "Go Go Go";
d.body.appendChild($btnGo);

$btnGo.addEventListener("click", (e) => {
    e.stopPropagation(); // Evitamos que el click del botón burbujee y dispare el arma
    const audio = new Audio("gogogo.mp3");
    audio.play();
});

let arma = "cuchi";

d.addEventListener("click", () => {
    if (arma === "cuchi") {
        console.log("Puntazo")
    } else if (arma === "glock" || arma === "magnum") {
        console.log("Dispara")
    }
})

d.addEventListener("contextmenu", () => {
    if (arma === "cuchi") {
        console.log("Puñalada")
    } else if (arma === "glock") {
        console.log("Piu piu piu")
    } else if (arma === "magnum") {
        console.log("Ampliar mira...");
    } else {
        console.log("Cargando...")
        setTimeout(() => console.log("Bomb has been planted!"), 4000)
    }
})

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
            console.log("Izquierda");
            break;
        case "s":
            console.log("Atras");
            break;
        case "d":
            console.log("Derecha");
            break;
        case "w":
            console.log("Adelante");
            break;
        case " ":
            console.log("Salto");
            break;
        case "q":
            if (arma === "cuchi") {
                arma = "glock"
            } else if (arma === "glock") {
                arma = "magnum"
            } else if (arma === "magnum") {
                arma = "bomba"
            } else {
                arma = "cuchi"
            }
        default:
            break;
    }
})