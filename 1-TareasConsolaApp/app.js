const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

require('colors');

const main = async() => {
    const inquirer = await import('./helpers/inquirer.mjs');
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    while(true) {
        let opt = await inquirer.inquirerMenu();
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
        guardarDB(tareas.listadoArr);
        if (opt === '0') {
            break;
        }
    }
}
main();