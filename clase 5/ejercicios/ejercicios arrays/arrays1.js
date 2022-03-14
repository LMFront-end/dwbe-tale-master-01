/*Ejercicios arrays1

1. Rellena un array con los numeros del 1 al 10.

2. Rellena un array con los numeros aleatorios (10 por ejemplo). muestralo por la consola.

3. Del array anterior, creale una copia (que no sea el mismo en sí). muestralos por consola.
*/


//ejercico 1


let numero = [];

//rellenando con los numeros del 1 al 10

for (let i = 1; i <= 10; i++) {
    //el push añade numeros
    numero.push(i);
}

console.log(numero);



//ejercicio 2

//creamos una función que nos cree numeros aleatorios

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let numero1 = [];

for (let i = 1; i <= 10; i++) {
    //el push añade numeros
    numero1.push(getRandomInt(1, 10));
}

//console.log(numero1);


//ejercicio 3

let numero2 = numero1.slice();

//el metodo slice() crea un copía del array, con la ventaja de que no modifca a los elementos si agregamos un elemento nuevo a la copia.

numero2.push(18);
console.log("array1");
console.log(numero1);

console.log("array2");
console.log(numero2);