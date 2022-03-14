//alert("funciona");
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

        alert("Se ha ingreado modelo");
    } else {
        alert("el nombre ya fue eliminado");
    }
}

function eliminarUltimo(evt) {
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
    } else if (!existeNombre(nombre)) {
        let opcion = "<li> " + nombre + "</li>";

        let lista = document.getElementById("lista-nombres");

        lista.innerHTML -= opcion;

        nombres.pop(nombre);

        alert("Se ha eliminado el ultimo elemento ingresado");
    } else {
        alert("el nombre ya fue eliminado");
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