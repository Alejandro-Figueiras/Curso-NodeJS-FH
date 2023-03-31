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
                tareas.listadoCompleto();
                break;
            case '3': // listar tareas completadas
                tareas.listarPendientesCompletadas(true);
                break;
            case '4': // listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
                break;
            case '5': // completar y descompletar tareas
                const ids = await inquirer.completarTareas(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6': // borrar tareas
                let id = await inquirer.borrarTareas(tareas.listadoArr);
                if (id == '0') break;
                let ok = await inquirer.confirmar('¿Estás seguro?')
                if (ok) {
                    tareas.borrarObjeto(id);
                    console.log(`${'!'.blue} Tarea Borrada Satisfactoriamente!`);
                }
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