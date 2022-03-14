//("si funciona");


class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    fullname() {
        return `mi nombre completo es ${this.nombre} ${this.apellido}`
    }

    es_mayor() {
        return this.edad >= 18;
    }
}

let persona1 = new Persona("Lina", "Guerrero", 22);

console.log(persona1);
console.log(persona1.fullname());
console.log(persona1.es_mayor());