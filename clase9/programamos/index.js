const hobbies = ["cantar", "bailar", "jugar", "dormir", "ver tv"];
const fs = require('fs');

hobbies.forEach((hobbie, indice) => {
    const texto = `${indice + 1} ${hobbie}\n`;
    console.log(texto);

    //using appendFile()
    fs.appendFile('listahobbies.txt', texto, function(err) {
        if (err) console.log(err);
        else console.log('saved!');
    });
});