//alert("si funciona");

/*
SINTAXIS:

for (<sentencia_1>; <sentencia_2>; sentencia_3>) {
    //codigo que se repite
}

SENTENCIA 1: Se ejecuta antes de que empiece el bloque de codigo a repetir.

SENTENCIA 2: Define la condición por la que el bloque de codigo se va a ejecutar.

SENTENCIA 3: Se ejecuta despues de que acabe el bloque de codigo a repetir
*/

let i;

//la i = 0 --> empieza en cero
//la i < 5 ---> la i menor que 5
//i++ --> se incrementa una unidad
for (i = 0; i <= 5; i++) {
    alert("i =" + i);
}

/*VARIACIONES*/

//1. Si omitimos la primera sentencia debemos haber inicializado la variable con anterioridad.

//ejemplo:

let j = 1;
for (; j <= 5; j++) {
    alert("j es igual a: " + j);
}

//2. Si omitimos la segunda sentencia dentro del codifo a repetir debemos incluir una intrucción break.

let k;

for (k = 1;; k++) {
    alert("k = " + k);
    if (k == 5) {
        break;
    }
}

//3. Si omitimos la sentencia tres, debemos incrementar o decrecer el valor de la variable dentro del bucle.

let l;
for (l = 1; l <= 5;) {
    alert("l = " + l);
    l++;
}

//4. Podemos trabjar con dos o más variables dentro del bucle for

let m, n;
for (m = 1, n = 10; m <= 10, n <= 10; m++, n--) {
    alert("m = " + m + " n = " + n);
    if (m === 10, n === 1) {
        break;
    }
}