//Operadores logicos

//caso 1

let num = 1; //nummero
let num1 = "1"; //string

let condicionUno = (1 == "1"); //igual
console.log(condicionUno); //comparación de valores 
//imprime true

//caso 2
let cas1 = 1; //numero
let cas2 = "1"; //string

let condicionDos = (1 === "1"); //estrictamente igual
console.log(condicionDos);
//imprime false

//caso 3
let con1 = 0;
let con2 = 1;

let condicionTres = (0 || 1);
console.log(condicionTres);
//los valores operandos imprimen verdadero (true) si los valores son distintos a cero
//Si tienen un valor cero imprime false
//imprime 1

//caso 4
let cua1 = true;
let cua2 = 1;

let condicionCuatro = (true && 1);
console.log(condicionCuatro);

//imprime 1

//caso 5

//en la condición && (AND) solo se cumple (true) si las dos funciones son verdaderas, de lo contrario será falso

let cinc1 = 0;
let cinc2 = 4;
let respuesta = (0 && 4);

let condicioncinco = (1 - 1) && (2 + 2);
console.log(respuesta);
//imprime = 0

/* AND

true && true = true
true && false = false 
false && false = false

*/

//resolviendo los parentesis
/*
(1-1) = 0
(2 + 2) = 4
por lo tanto la condicion no se cumple por lo cual seria false.*/

//caso 6

//En la condicion || (OR) se cumple la condicion si cualquiera de las planteadas son verdaderas

let seis1 = 0;
let seis2 = 4;
let respuesta2 = (0 || 4);


let condicionSeis = (1 - 1) || (2 + 2);
console.log(respuesta2);
//imprime 4 

//OR

/* 
true || true = true
true || false = true 
false || false = false

*/

//resolviendo los parentesis
/*
(1-1) = 0
(2+2) = 4 

*/