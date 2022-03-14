const calculator = require('./calculator1.js');

const fs = require('fs');

//para preguntar al usuario

const interface = require('readline-sync');

let nombre = interface.question("Escribe tu nombre: ");

console.log(`Hola ${nombre} espero te encuentres muy bien! realiza las operaciones las veces que desees!... si quieres salir solo presiona 5 \n`);

let operacion = "";

do {
    operacion = interface.question(`que operacion deseas realizar ${nombre} 
1: suma 
2: restar 
3: division 
4: multiplicacion
5: salir
operacion: `);

    if (operacion == 1) {
        let numero1 = interface.question("primer numero para sumar ");
        let numero2 = interface.question("segundo numero para sumar ");
        let resultado = calculator.sumar(numero1, numero2);
        console.log("el resultado de la suma es " + resultado);

    } else if (operacion == 2) {
        let numero1 = interface.question("primer numero para restar ");
        let numero2 = interface.question("segundo numero para restar");
        let resultado = calculator.restar(numero1, numero2);
        console.log("el resultado de la resta es " + resultado);

    } else if (operacion == 3) {
        let numero1 = interface.question("primer numero para dividir ");
        let numero2 = interface.question("segundo numero para dividir ");
        let resultado = calculator.dividir(numero1, numero2);
        console.log("el resultado de la división es " + resultado);

    } else if (operacion == 4) {
        let numero1 = interface.question("primer numero para multiplicar ");
        let numero2 = interface.question("segundo numero para multiplicar ");
        let resultado = calculator.multiplicar(numero1, numero2);
        console.log("el resultado de la multiplicación es " + resultado);

    } else if (operacion != 5) {
        console.log("ingrese una operacion correcta");
    }


} while (operacion != "5");


/*
fs.appendFile('operaciones.txt', texto, function(err) {
    if (err) console.log(err);
    else console.log('saved!');
});
*/