const opts = {
    base: {
        demand: true,
        /*si es requerido el comando */
        alias: 'b' /*es el alias con el qu se escribira en la consola */
    },
    limite: {
        alias: 'l',
        default: 10 /*valor por defecto que ira dentro del limite */
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea en archivo texto la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}