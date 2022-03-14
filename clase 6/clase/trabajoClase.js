//Cuadrado de numero

function UnNumeroCuadrado(no) {
    return num1 ** 2
}

let squared = UnNumeroCuadrado(5);
console.log(UnNumeroCuadrado);

//Calcular el numero factorial


let num1 = parseFloat(prompt("Ingresa un numero"));

let total = 1;

for (let i = 1; i <= num1; i++) {
    total = total * i;
}

alert("el valor factorial del numero: " + num1 + "es: " + total);

//organizado en una función

function factorial(num) {
    let num1 = parseFloat(prompt("Ingresa un numero"));
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    console.log(total);
}

factorial(5);