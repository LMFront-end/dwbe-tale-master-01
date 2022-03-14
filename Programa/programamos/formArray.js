let formulario = document.getElementById("miFormulario");

window.onload = iniciar; //sin parentesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

//validación de la casilla nombre
function validaNombre() {
    let elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert("El campo no puede estar vacío");
        error(elemento);
        return false
    } else {
        return true;
    }
}

//validación de la casilla apellido
function validaApellido() {
    let elemento = document.getElementById("apellido");
    if (elemento.value == "") {
        alert("El campo no puede estar vacío");
        error(elemento);
        return false
    } else {
        return true;
    }
}

//validación de la casilla email
function validaEmail() {
    let elemento = document.getElementById("email");
    if (elemento.value == "") {
        alert("El campo no puede estar vacío");
        error(elemento);
        return false
    } else {
        return true;
    }
}

//validar checkbox (edad)
function validaCheck() {
    let campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("debes ser mayor de edad");
        return false;
    } else {
        return true;
    }
}

//Validar país
function validaPais() {
    let campoCheck = document.getElementById("paises");
    if (!campoCheck.checked) {
        alert("debe seleccionar país");
        return false;
    } else {
        return true;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}

let hobbies = [];

let dibujar = document.getElementById("dibujar");
let verTv = document.getElementById("tv");
let dormir = document.getElementById("dormir");
let comer = document.getElementById("comer");
let cocinar = document.getElementById("cocinar");
let leer = document.getElementById("leer");

if (dibujar.checked) {
    hobbies.push(dibujar.value);
}
if (vertV.checked) {
    hobbies.push(verTv.value);
}
if (dormir.checked) {
    hobbies.push(dormir.value);
}
if (comer.checked) {
    hobbies.push(comer.value);
}
if (cocinar.checked) {
    hobbies.push(cocinar.value);
}
if (leer.checked) {
    hobbies.push(leer.value);
}