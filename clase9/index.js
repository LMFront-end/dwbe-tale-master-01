console.log("hola mundo");

const mascotas = ["perro", "conejo", "tortuga", "peces"];

mascotas.push("loro");

console.log(mascotas);

mascotas.forEach((mascota, indice) => {
    console.log(`indice: ${indice} valor: ${mascota}`);
});