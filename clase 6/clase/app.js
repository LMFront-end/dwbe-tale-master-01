//alert("si funciona");


/*
//crear una función
function funcionDePrueba() {
    console.log("hola desde una función");
}

//Llamar la función
funcionDeprueba();

//puedes escribirle un nombre a la función

function funcionDePrueba(nombre, apellido) {
    console.log("hola desde una función " + nombre + apellido);
}

funcionDeprueba("Lina", "Guerrero");
funcionDeprueba("Diana", "Guerrero");
funcionDeprueba("Alejandro", "Guerrero");
funcionDeprueba("Milo", "Guerrero");

*/

//var, const, let

/* var = variable global*/

//let (dinamico) es una variable de bloque

/*
let texto2 = "Hola LET 25";
texto2 = "Hola donde estas";

//las variables no se pueden modificar, todo debe ser declarado con constantes (estatico)
const num = "34";

//ejemplo 

function dentroDeFuncion() {
    var texto4 = "Hola texto 4";
}

console.log(texto4);
dentroDeFuncion();

*/

//Funciones flecha (aroww)

function saludar(e) {
    console.log('Hola');
}

//función anonima
let saludar2 = function(e) {
    console.log('Hola');
}

//función flecha
let saludar3 = (e) => {
    console.log('hola');
}

/*
saludar();
saludar2();
saludar3();
*/

document.getElementById("btn").addEventListener('click', saludar3);


//parametros

//las funciones no son funciones sin los parametros




//document.write(res);

//haciendolo con una funciones
/*
function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(11, 22);

let suma =(num1, num2) =>console.log(num1 + num2)
*/

function suma(num1, num2) {

    let res = num1 + num2

    return res


}

let resultado = suma(4, 5);
document.write(resultado);
document.write("<br>")



/*function saludo(nombre) {
    let frase = `¡Hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludo("Lina");*/

//otra forma de crear una funcion

const saludo = function(nombre) {
    let frase = `¡Hola ${nombre}! ¿como estas?`;
    document.write(frase);
    document.write("<br>")
}

saludo("Lina");

//funciones flecha

const saludar = (nombre) => {
    let frase = `¡Hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("Lina Maria");

//let frase = `¡Hola ${nombre}! ¿como estas?`;

//las funciones flechas const saludar = (nombre) => document.write(frase);