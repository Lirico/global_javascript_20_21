/************ ASINCRONIA **********/

/* 
    La asicronia es el arte de poner en espera el resultado de una operacion.
*/

// console.log("INSTRUCCION 1")
// console.log("INSTRUCCION 2")

// setTimeout(() => console.log("INSTRUCCION 3"), 3000);

// console.log("INSTRUCCION 4")
// console.log("INSTRUCCION 5")

///////////////////////////////////////////////////////////

/* 
    PETICION
    
    Es el proceso por el cual el cliente (frontend) solicita al servidor (backend) algo.
    Este algo puede ser informacion, creacion de algo, una edicion de algo o una eliminacion de algo, etc...

    Cuando hacemos una peticion, enviamos al servidor un objeto llamado REQUEST (peticion). Este objeto contiene metodos y
    propiedades que son requeridas para que el servidor pueda entender mi solicitud y actuar en consecuencia.
    Tambien puede contener informacion importante para que realice la tarea solicitada.

    Que puede contener:
    -> El formato establecido en el que la informacion sera enviada -> XML o JSON.
    -> Un objeto que el cliente quiere insertar/crear en la base de datos.
    -> La accion que se pretende ejecutar
    -> Tokens
    -> parametros/querys de ruta
    -> endpoint (la ruta a la que pretendo comunicarme de cliente a servidor)
*/

/* 
    RESPUESTA

    Es un objeto, llamado RESPONSE, que el servidor me manda a mi (cliente) luego de realizada la operacion solicitada por el cliente (por mi),

    ¿Que puede contentener?
    En criollo, es bastante parecido al REQUEST, cambian algunos datos ya que el cliente no necesita lo mismo que el servidor.
*/

/*
    API -> Application programming interface

    Es un backend de solo lectura -> Solo puede recibir solicitudes de obtencion de informacion

    API REST 

    Es un backend CRUD -> Create Read Update Delete
*/

/* 
    ENDPOINT

    Una ruta a la cual puedo hacer una peticion.

    Ej: sitiowebcualquiera.com/pokemons
    Ej: sitiowebcualquiera.com/pokemons/6 -> Chorizard
    Ej: sitiowebcualquiera.com/users
*/

// Como se supone que yo hago una peticion?

/* 
    PROTOCOLO HTTP -> HYPERTEXT TRANSFER PROTOCOL

    GET (obtener/leer)
    POST (crear/insertar)
    PUT (editar/actualizar)
    DELETE (mondongo)
*/

// CLIENTE -> PETICION -> GET -> SERVIDOR --------------- SERVIDOR -> RESPONSE -> INFO -> CLIENTE
// CLIENTE -> PETICION -> POST -> SERVIDOR -------------- SERVIDOR -> RECIBE UN OBJETO -> RESPONDE MENSAJITO DE EXITO -> CLIENTE

// OBJETO XMLHTTPREQUEST -> 2015 -> fetch
const $ul = document.createElement("ul");
const $next = document.createElement("button");
const $prev = document.createElement("button");
let set = 20;
// Por defecto el fetch hace un GET
// Si no le digo que hacer con eso, JS me encapsula la peticion en una PROMESA.
fetch("https://pokeapi.co/api/v2/pokemon/")
  // Al recibir la info la pasamos a JS (recodemos que la info viene en JSON)
  .then((response) => response.json())
  // Una vez que tenemos la info en JS operamos esa info.
  .then((responseEnJS) => {
    $next.textContent = "Next";
    $prev.textContent = "Prev";
    toggleDisable(set, $prev);
    // Configuro para obtener los pokemons de la siguiente pagina
    $next.addEventListener("click", () => next($ul, $next, $prev));
    $prev.addEventListener("click", () => prev($ul, $next, $prev));
    // Por cada pokemon en la lista que me traje, inserto un item de lista con el nombre de ese pokemon.
    insertarPokemon(responseEnJS.results, $ul);
    document.body.appendChild($ul);
    document.body.appendChild($next);
    document.body.appendChild($prev);
  });

function next() {
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${String(set)}&limit=20`)
    .then((response) => response.json())
    .then((responseEnJS) => {
      toggleDisable(set, $prev);
      insertarPokemon(responseEnJS.results, $ul);
    });
  set += 20;
  document.body.appendChild($ul);
  document.body.appendChild($next);
  document.body.appendChild($prev);
}

function prev() {
  set -= 40;
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${String(set)}&limit=20`)
    .then((response) => response.json())
    .then((responseEnJS) => {
      toggleDisable(set, $prev);
      insertarPokemon(responseEnJS.results, $ul);
    });
  document.body.appendChild($ul);
  document.body.appendChild($next);
  document.body.appendChild($prev);
}

function insertarPokemon(arreglo, ul) {
  for (const pokemon of arreglo) {
    const $li = document.createElement("li");
    $li.textContent = pokemon.name;
    ul.appendChild($li);
  }
}

function toggleDisable(set, button) {
  if (set == 20) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}


