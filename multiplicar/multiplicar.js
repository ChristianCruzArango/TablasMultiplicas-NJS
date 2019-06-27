/*al inicio siempre se colocan los requireds */

/*tenemos tres tipos de require */

/* esta no viene por defecto en node es un paquete que se instala*/
// const fs = require('express');
/* si empieza ./ son archivos que nosotros mismos creamos en nuestro proyecto*/
// const fs = require('./patch');

/*esto significa que esta libreria ya existe en node.js */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=============================='.green);
    console.log(`=======tabal de ${base}========`.green);
    console.log('=============================='.green);

    for (let i = 1; i <= limite; i++) {

        let multiplicar = base * i;
        console.log(`${base} * ${i} = ${multiplicar}\n`);

    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        let data;
        for (let i = 1; i <= limite; i++) {
            let multiplicar = base * i;
            data += `${base} * ${i} = ${multiplicar}\n`;
        }


        /*esta sirve para guardar informacion en un archivo de texto:el primer paramentro es el nombre del archivo,
        el seguido es la data que se desea guardar en el archivo,el tercero es un callback donde se valida si se presento
        un error o no  */
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

/*para utilizar un archivo en otro se debe escribir la siguiente sintaxis */
module.exports = {
    crearArchivo,
    listarTabla
}