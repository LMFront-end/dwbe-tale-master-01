//alert("funciona");

//1. Asignamos un evento al h1

document.getElementById('eventos').addEventListener("mouseover", manejador);

document.getElementById('eventos').addEventListener("mouseout", manejador);


//e --> evento
function manejador(e) {
    switch (e.type) {
        case "mouseover":
            this.style.color = "pink";

        case "mouseout":
            this.style.color = "blue";
    }
}