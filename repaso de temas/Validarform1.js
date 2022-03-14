//alert("si funciona");

//1. Seleccionamos el nombre del formulario

//conociendo el id

let formulario = document.getElementById("miFormulario");

//forms es un array de formularios
let formulario2 = document.forms["miFormulario"];


//conociendo el numero de formulario de la pagina

let formulario3 = document.getElementByTagnName("form")[0];

let formulario4 = documnet.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] devuelve un array con todos lo input del formulario
//getElementById("id") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") devuelve un array con elementos de un tipo de etiqueta (input, select, ect.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobitton).

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

//validar el telefono
function validaTelefono() {
    let elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("el campo telefono tiene que ser numérico");
        return false
    } else {
        return true;
    }
}

//validar fecha

function validaFecha() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let año = document.getElementById("año").value;

    let fecha = new Date(año, mes, dia);
    if (inNaN(fecha)) {
        alert("los campos de la fecha son incorrectos");
        return false;
    } else {
        return true;
    }
}

//validar checkbox

function validaCheck() {
    let campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("debes ser mayor de edad");
        return false;
    } else {
        return true;
    }
}

//validar todo en conjunto

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}