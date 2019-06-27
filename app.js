const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/*todos los nombre que se escriben por comando vienen en un arreglo al principio de cada objeto con el _ */
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // .then(resp => console.log(`tabla creada ${resp}`))
        // .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado: ${resp}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = '8';
/*para saber que parametros se envian directamente desde la consola se utiliza el process.argv donde 
visualizamos que en la tercera posicion es donde se encuentra nuestros parametros */

// let argv2 = process.argv;
console.log(argv.base);


// let parametro = argv[2];
// /*el split separa nuestro string en un arreglo ingresando donde deseamos cortarlo */
// let base = parametro.split('=')[1]