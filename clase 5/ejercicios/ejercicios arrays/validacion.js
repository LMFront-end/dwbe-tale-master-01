/* Ejercicio

Dado un input y un boton, escribir el nombre de personas
(no controlamos nada de momento) y lo mostramos en una lista desordenada, deberemos guardar los nombres en un array y comprobar si existe el nombre del array
*/
//alert("funciona");
//solución

let nombres = [];

function insertarNombre(evt) {
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
    } else if (!existeNombre(nombre)) {
        let opcion = "<li> " + nombre + "</li>";

        let lista = document.getElementById("lista-nombres");

        lista.innerHTML += opcion;

        nombres.push(nombre);

        alert("Se ha insertado el nombre");
    } else {
        alert("el nombre ya fue ingresado");
    }
}


/*
function existeNombre(nombre) {
    const nombreEncontrado = nombre.find(element => element.trim().toLowerCase() === nombre.trim().toLowerCase());

    if (nombreEncontrado) {
        return true;
    } else {
        return false;
    }
}
*/

function existeNombre(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        const element = nombres[i];

        if (element.trim().toLowerCase() === nombre.trim().toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}