


const d = document;

const formulario = d.querySelector("form");
const nombre = d.querySelector("input[name='nombre']");
const edad = d.querySelector("input[name='edad']");
const name_error = d.querySelector(".name_error");
const age_error = d.querySelector(".age_error");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!nombre.value) {
        name_error.classList.remove("none");
    } else {
        name_error.classList.add("none");
    }
    if (!edad.value) {
        age_error.classList.remove("none");
    } else {
        age_error.classList.add("none");
    }

    console.log({
        nombre: nombre.value,
        edad: edad.value
    })

    resetForm()
});

document.addEventListener("change", (event) => {
    console.log(event.target.value)
})

function resetForm() {
    nombre.value = "";
    edad.value = "";
    name_error.classList.add("none");
    age_error.classList.add("none");
}
