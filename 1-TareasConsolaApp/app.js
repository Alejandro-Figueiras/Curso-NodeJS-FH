const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

require('colors');

const main = async() => {
    const tareas = new Tareas();

    while(true) {
        let opt = await import('./helpers/inquirer.mjs').then(module => module.inquirerMenu());
        switch (opt) {
            case '1': // crear tarea
                const desc = await import('./helpers/inquirer.mjs').then(module => module.leerInput('Descripción:'));
                tareas.crearTarea(desc);
                break;
            case '2': // listar tareas
                console.log(tareas._listado);
                break;
                
        }
        await import('./helpers/inquirer.mjs').then(module => module.pausa());
        if (opt === '0') {
            break;
        }
    }
}
main();