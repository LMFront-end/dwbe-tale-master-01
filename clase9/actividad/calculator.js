//const Calculator = {};


//funcion para sumar

function add(num1, num2) {
    return num1 + num2;
}

//restar
function substract(num1, num2) {
    return num1 - num2;

}

//multiplicar
function multiply(num1, num2) {
    return num1 * num2;

}

//dividir
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("no puedes dividir por cero")
    } else {
        return num1 / num2;
    }
}

//modulo
function modu(num1, num2) {

    if (num2 === 0) {
        console.log("no puedes dividir por cero")
    } else {
        return num1 % num2;
    }
}


//el exports me exporta las propiedades de un objeto
//para exportar alguna función
//puedes crear un export por cada función que quieras exportar a otro archivo
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
exports.modu = modu;