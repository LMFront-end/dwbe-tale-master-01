const interface = require('readline-sync');

let respuesta = "";

//let nombre = interface.question("Escribe tu nombre: ");

//console.log("Hola " + nombre);

//suma, resta, división, multiplicación, salir


do {
    console.log("1- suma");
    console.log("2- resta");
    console.log("3- division");
    console.log("4- multiplicación");
    console.log("5- salir");
    let respuesta = interface.question("Que operacion deseas realizar: ");

    if (respuesta != "5") {
        const primerNumero = interface.question("ingresa el primer valor: ");
        const segundoNumero = interface.question("ingresa el segundo valor: ");


        switch (respuesta) {
            case "1":
                var result = parseInt(primerNumero) + parseInt(segundoNumero);
                console.log("El resultado es: " + result);
                break;

            case "2":
                var result = parseInt(primerNumero) - parseInt(segundoNumero);
                console.log("El resultado es: " + result);
                break;

            case "3":
                var result = parseInt(primerNumero) / parseInt(segundoNumero);
                console.log("El resultado es: " + result);
                break;

            case "4":
                var result = parseInt(primerNumero) * parseInt(segundoNumero);
                console.log("El resultado es: " + result);
                break;
            default:
                break;
        }

    }

} while (respuesta != "5");