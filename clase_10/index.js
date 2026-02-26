/////////////// INTRODUCCION A DOM ////////////////

/* 
    D Document
    O Object 
    M Model

    El DOM es ese documento HTML que esta incrustado en el navegador en la soplapita
    de ELEMENTS.

    Lo llamamos "documento en modelo de obejeto" por que es la forma en la cual
    JS trata a dicho documento.
    En pocas palabras, para JS es un objeto gigante y nos movemos entre elementos
    por medio de anidacion, es decir, por dotwalking o bracket notation.
*/

// console.log(document)
// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// Rastreadores de selectores
// Rastraer via TAG -> Es como un filter
// console.log(document.getElementsByTagName('section'))

// Rastraer via class -> Es como un filter
// console.log(document.getElementsByClassName('grupo'))

// Rastraer via id -> Es como un find
// console.log(document.getElementById('unico'))

// Rastreadores universales
// 1ro puede rastear cualquier selector pero devuelve 1 elemento.
// console.log(document.querySelector('#unico'))

// 2do puede rastear cualquier selector pero devuevle un []
// console.log(document.querySelectorAll('#unico'))

// document -> $

// const $p = document.querySelector('p');
// const $a = document.querySelector('a');
const $ul = document.querySelector('ul');

// let texto = "Me gusta el pancito";

// Un elemeneto HTML es en si un objeto.
// Por lo tanto sus atributos son PROPIEDADES.
// $p.textContent = texto;
// $p.style.color = "red";
// $p.className = 'parrafo'

// $a.target = "_blank";

// $ul.innerHTML = `
//     <li>uno</li>
//     <li>dos</li>
//     <li>tres</li>
// `

// const estaciones = ["Verano", "Otonio", "Primavera", "Invierno"];

// createElement() -> Creamos un elemento HTML
// appendChild() -> Insertar un elemento dentro de otro

// estaciones.forEach(estacion => {
//     const $li = document.createElement('li');
//     $li.textContent = estacion;
//     $ul.appendChild($li);
// })

const pokemons = [
{ id: 1, name: "Bulbasaur", type: "Grass/Poison", bgColor: "#78C850", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { id: 2, name: "Ivysaur", type: "Grass/Poison", bgColor: "#78C850", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" },
    { id: 3, name: "Venusaur", type: "Grass/Poison", bgColor: "#78C850", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
    { id: 4, name: "Charmander", type: "Fire", bgColor: "#F08030", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { id: 5, name: "Charmeleon", type: "Fire", bgColor: "#F08030", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" },
    { id: 6, name: "Charizard", type: "Fire/Flying", bgColor: "#F08030", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
    { id: 7, name: "Squirtle", type: "Water", bgColor: "#6890F0", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { id: 8, name: "Wartortle", type: "Water", bgColor: "#6890F0", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" },
    { id: 9, name: "Blastoise", type: "Water", bgColor: "#6890F0", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
    { id: 10, name: "Caterpie", type: "Bug", bgColor: "#A8B820", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png" },
]


const d = document;
const $cards = d.querySelector(".cards");

pokemons.forEach(pokemon => {
    // Destructuracion
    const {img, name, type, bgColor, id} = pokemon;

    const $card = d.createElement('div');
    $card.className = "card";
    $card.id = id
    $card.style.backgroundColor = bgColor;
    $card.innerHTML = `
        <img src=${img}>
        <h3>${name}</h3>
        <h4>${type}</h4>
    `
    $cards.appendChild($card);
})

