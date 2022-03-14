//alert("funciona");


//MÉTODOS

//Array.isArray (<nombre del array>): devuelve true si es un objeto de tipo Array. Si ponemos typeof <nombre del array> duvuelve un object.

//ejemplo

let prendas = ["blusa", "zapatos", "medias", "camisa", "pantalones"];

console.log(Array.isArray(prendas));

//Nota: como es un método se deben poner los parentesis

//<nombre array> instanceof Array: devuelve true si es un Array.

console.log(prendas instanceof Array);

//MÉTODOS PARA MOSTRAR UN ARRAY

//toString(): convierte el array en una cadena 

console.log(prendas.toString());

//join(<separador>): convierte el array a cadena separado por un separador indicado por parametro

console.log(prendas.join(" * "));

//METODOS PARA AÑADIR, EXTRAER O BORRAR ELEMENTOS 

//pop() y shift(): extraer el ultimo y el primer elemento respectivamente y lo guarda en una variable (si queremos)

/*Ejemplo pop()*/
let ultimo = prendas.pop();
document.write("<br/>Despues de sacar " + ultimo + " quedan: " + prendas.toString());

/*Ejemplo shift()*/
let primero = prendas.shift();
document.write("<br/>Despues de sacar " + primero + " quedan: " + prendas.toString());

//delete nombreArray[<indice>]: elimina el elemento y lo transforma a undefined.

//push(<elemento>) y unshift(): añade un elemento al final y al principio del array respectivamente

/*Ejemplo push()*/
prendas.push("saco");
document.write("<br/>Despues de meter saco queda: " + prendas.toString());

/*Ejemplo unshift()*/

prendas.unshift("Sombrero");
document.write("<br/>Despues de meter sombrero queda: " + prendas.toString());

//concat (<lista de arrays seperados por comas>): une un array inicial con un segundo array...

let nombres = ["maria", "lina", "mateo", "santiago"];

let nuevo = prendas.concat(nombres);

document.write("<br/>El array completo es: " + nuevo.toString());


//METODOS PARA BUSCAR

//indexOf(<elemento>[,<pos>]) lastIndexOf(<elemento>[,<pos>]): devuelve la primera o ultima posición de un elemento respectivamente; podemos pasarle a partir de que posición va a buscar.

/*Ejemplo indexOf*/

document.write("<br/>La primera posicion de zapatos es: " + prendas.indexOf("zapatos"));

/*Ejemplo lastIndexOf*/

document.write("<br/>La ultima posicion de zapatos es: " + prendas.lastIndexOf("zapatos"));

//METODOS PARA ORDENAR E INVERTIR EL ORDEN DE UN ARRAY

//reverse(): invierte el orden de un array
prendas.reverse();
document.write("<br/>El array despues de invertir el array es: " + prendas.toString());

//sort(): Ordena el array

prendas.sort();
document.write("<br/>el array despues de ordenar: " + prendas.toString());

//Si estamos almacenando string se ordenaran en orden alfabeticamente

//los numeros almacenados como cadenas se comparan por caracter.