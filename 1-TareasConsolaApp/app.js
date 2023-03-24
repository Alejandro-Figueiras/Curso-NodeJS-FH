require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    console.clear();
    while(true) {
        let opt = await import('./helpers/inquirer.mjs').then(module => module.inquirerMenu());
        if (opt === '0') {
            break;
        }
    }
}
main();