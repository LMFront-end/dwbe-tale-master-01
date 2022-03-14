/*Dentro de un objeto las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos*/

/*Las propiedades: se definen en modo nombre:valor. ejemplo: nombbre, apellido y ano*/

/*Métodos: acciones que se pueden ejecutar sobre un objeto*/

const lina = {
    nombre: "lina",
    apellido: "Guerrero",
    edad: 22,
    pasatiempos: ["hacer ejercicio", "dormir", "comer", "aprender a programar"],
    soltera: true,
    contacto: {
        email: "linita159@gmail.com",
        telefono: 3213036782,
        instagram: "DevLinamg",
    },
    saludar: function() {
        console.log("hola");
    },
    //this hace referencia al objeto 
    decirMiNombre: function() {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

}
console.log(lina);
console.log(lina["nombre"]);
console.log(lina["apellido"]);
console.log(lina.nombre);
console.log(lina.soltera);
lina.saludar();
lina.decirMiNombre();

//1. Definir y crear un objeto simple utilizando un literal.

let personal = {
    nombre: "Lina",
    apellido: "Guerrero",
    ano: 1998
};

//2. Definir y crear un objeto simple utilizando la palabra new.

let persona2 = new Object();
persona2.nombre = "Mateo";
persona2.apellido = "Saavedra";
persona2.ano = 1992;

//3. Definir un constructor de un objeto y crear objetos del tipo construido.

function Persona(nom, ape, an) {
    this.nombre = nom;
    this.apellido = ape;
    this.ano = an;
}

let lina = new Persona("Lina", "Guerrero", 1998);
let mateo = new Persona("Mateo", "Saavedra", 1992);

/*
this (palabbra reservada):  
    -Hace referencia al propietario de la funcion que está invocandose.
    -Hace referencia al objeto donde la función es un metodo
*/