//paso 1. Establecemos un punto de partida en nuestro javascript, para lo cual es necesario inicializar una funcion con init().

//Dentro de la etiqueta <body> vamos a iniciar la funcion por medio del atributo onload="init()" para llamar a la funcion desde nuestro html
var operando1;
var operando2;
var op;



function init() {
    //alert("hola mundo");
    //Variables 

    var resultado = document.getElementById('resultado');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cancel = document.getElementById('cancel');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var multiplicacion = document.getElementById('multiplicacion');
    var tres = document.getElementById('tres');
    var dos = document.getElementById('dos');
    var uno = document.getElementById('uno');
    var resta = document.getElementById('resta');
    var igual = document.getElementById('igual');
    var division = document.getElementById('division');
    var cero = document.getElementById('cero');
    var suma = document.getElementById('suma');



    //eventos para los numeros

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0"
    }

    //Evento para los operadores

    cancel.onclick = function(e) {
        cancelar();
    }

    suma.onclick = function(e) {
        operando1 = resultado.textContent;
        op = "+";
        limpiar();
    }

    resta.onclick = function(e) {
        operando1 = resultado.textContent;
        op = "-";
        limpiar();
    }

    division.onclick = function(e) {
        operando1 = resultado.textContent;
        op = "/";
        limpiar();
    }

    multiplicacion.onclick = function(e) {
        operando1 = resultado.textContent;
        op = "*";
        limpiar();
    }

    //boton de igual

    igual.onclick = function(e) {
        operando2 = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function cancelar() {
    resultado.textContent = "";
    operando1 = 0;
    operando2 = 0;
    op = "";
}

//Para la funcion de resolver utilizaremos un switch para no hacer un declaracion muy larga

function resolver() {
    var res = 0;
    switch (op) {
        case "+":
            res = parseFloat(operando1) + parseFloat(operando2);
            break;
        case "-":
            res = parseFloat(operando1) - parseFloat(operando2);
            break;
        case "*":
            res = parseFloat(operando1) * parseFloat(operando2);
            break;
        case "/":
            res = parseFloat(operando1) / parseFloat(operando2);
            break;
    }

    cancelar();
    resultado.textContent = res;
}