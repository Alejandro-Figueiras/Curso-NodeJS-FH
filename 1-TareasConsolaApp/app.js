const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

require('colors');

const main = async() => {
    const inquirer = await import('./helpers/inquirer.mjs');
    const tareas = new Tareas();

    while(true) {
        let opt = await inquirer.inquirerMenu();
        console.log({opt})
        switch (opt) {
            case '1': // crear tarea
                const desc = await inquirer.leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2': // listar tareas
                console.log(tareas._listado);
                break;
                
        }
        await inquirer.pausa();
        if (opt === '0') {
            break;
        }
    }
}
main();