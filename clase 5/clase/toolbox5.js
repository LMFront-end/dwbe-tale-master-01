//ciclo for

//en el ciclo for se declaran tres sentecias.
for (var indice = 0; i < autos.length; indice++) {
    //Imprime uno a uno todos los autos
    console.log(autos[indice]);
}


//ciclo while
//En el ciclo while se declaran condiciones
var indice = 0;

while (indice < autos.length) {
    //Imprime uno a uno todos los autos
    // Estamos haciendo lo mismo que con el for
    console.log(autos[indice]);
    indice++;
}

//challenge

//pasar de un ciclo for a while

for (var indice = 0; i < autos.length; indice++) {
    //Imprime uno a uno todos los autos
    console.log(autos[indice]);
}

//en el ciclo for se declaran 3 sentencias que no siempre tienen que ser declaradas.

/*Sintaxis de un ciclo while

SINTAXIS WHILE:
    while (<condición>){
        //código a ejecutar
    }

let i = 0;
while (i < 10) {
    alert("i = " + i);
    i++;
}

*/

//1. declaraciónd de la variable

let i = 0;

//2. Declaracion del ciclo while con la condición

while (i < autos.length) {
    //3. el codigo a ejecutar
    console.log(autos[indice]);
    //4. Para que este no sea un bucle infinito, debemos buscar una condición de salida:
    i++
    //que la i en cada pasada del bucle vaya aumentando una unidad.
}

//El while puede utilizarse para pedirle datos a un usuario.

/**/

//pasar del bucle while al for

/*
SINTAXIS:

for (<sentencia_1>; <sentencia_2>; sentencia_3>) {
    //codigo que se repite
}

SENTENCIA 1: Se ejecuta antes de que empiece el bloque de codigo a repetir.

SENTENCIA 2: Define la condición por la que el bloque de codigo se va a ejecutar.

SENTENCIA 3: Se ejecuta despues de que acabe el bloque de codigo a repetir
*/

var indice = 0;

while (indice < autos.length) {
    //Imprime uno a uno todos los autos
    // Estamos haciendo lo mismo que con el for
    console.log(autos[indice]);
    indice++;
}

//1. En el bucle for se declaran sentencias

for (i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

//tambien podemos hacerlo de las siguientes maneras:

// 2. Omitiendo la primer sentencia (i = 0), lo podemos hacer sacando una variable al igual que en bucle for, con la unica diferencia que se debe poner un (;) en el lugar que ocupaba la sentencia

let i = 0;

for (; i < i < autos.length; i++) {
    console.log(autos[i]);
}

//se puede hacer lo mismo con la sentencia dos y tres.