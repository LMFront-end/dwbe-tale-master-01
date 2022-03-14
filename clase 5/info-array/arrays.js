//para comprobar que el archivo Js está correctamente enlazado, es una buena practica realizar un alert o un console.log.

//alert("si funciona");
//console.log("Hola mundo");

//si al abrir el archivo de arrays.html, sale por pantalla una alerta diciendo "si funciona", la pagina ha quedado enlazada correctamente, de lo contrario, revisa como guardaste el archivo js.

//Si funciona el alert, puedes comentar esa linea de codigo para que no intervenga con lo que vayamos a realizar.

//arrays (arreglos) []

//Un array no es nada más que una colección de elementos, una estructura de datos estatica.

const a = [];
const b = [1, true, "hola" ["A", "B", "C"]];

console.log(a);
console.log(b);

//En los arrays la posicion de los elementos empieza desde el numero 0 (cero).

/*CARACTERISTICAS:

-Almacena en una misma variable multiples valores: valores primitivos, objetos, etc.
-Se referencian con un indice numerico
-¡OJO! un onjeto se referencia con un nombre.
-Puede alcenar diferentes tipos de datos
*/

//OPERACIONES BÁSICAS CON UN ARRAY:

//Crear un array: let nombreArray = [< separados por comas>];

let animales = ["Perro", "Gato", "Hamster"];

//let nombreArray = new Array (< separados por comas>);

let nombreArray = new Array("Perro", "Gato", "Hamster");

//NOTA: No es recomendable crear un array con la palabra reservada new Array.

//Acceso a elementos de un array:
//nombreArray[<indice>]: el primero elemento de un array en el cero (0)

//camelCase
let miAnimal = animales[0];

//Mostrar todo el array utilizando instrucciones de mostrar (alert, document.write...)