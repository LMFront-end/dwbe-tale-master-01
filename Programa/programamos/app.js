//alert("si funciona");
/*
let es_par = function(n1) {
    if (n1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

*/

//otra forma de simplificar una función

let es_par = num1 => num1 % 2 === 0 ? true : false;

//más avanzado

//let es_par = num1 => num1 % 2 === 0;


document.getElementById("btn").addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);

    const mensaje = es_par(num1) ? "es par" : "es impar";

    document.getElementById("resultado").innerHTML = mensaje;


})


//en una sola linea

/*let es_par = num => ((num%2) ==0)?console.log(true):console.log(false);
 */