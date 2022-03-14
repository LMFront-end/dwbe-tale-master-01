//alert("sin funciona");

//PROPIEDADES:

//length: devuelve la longitud del array (número de elementos)

let animales = ["Perro", "Gato", "Pez", "Loro", "Tortuga", "Elefante"]

document.write("<br/> la longitud del array es: " + animales.length);

//nota: como length es una propiedad no se pone con parentesis, si fuese un método si.

//Mostrar los valores del array uno a uno:

document.write("<br/><br/> Todos los elementos:");

//creamos un bucle for para recorrer el array desde el primer al ultimo de los elementos., sabiendo que podemos saber la longitud con la propiedad length.

for (let i = 0; i < animales.length; i++) {
    document.write("<br/>" + animales[i]);
}