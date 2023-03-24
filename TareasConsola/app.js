require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    console.clear();
    while(true) {
        let opt = await mostrarMenu();
        await pausa();
        if (opt === '0') {
            break;
        }
    }
}
main();