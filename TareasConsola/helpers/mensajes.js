require('colors');

const mostrarMenu = async() => {
    return new Promise((resolve, reject) => {
        console.clear();
        console.log("===============================".green);
        console.log("    Seleccione una opción".green);
        console.log("===============================\n".green);
    
        console.log(`${"1.".green} Crear Tarea`);
        console.log(`${"2.".green} Listar Tareas`);
        console.log(`${"3.".green} Listar tareas Completadas`);
        console.log(`${"4.".green} Listar Tareas Pendientes`);
        console.log(`${"5.".green} Completar Tareas`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Cerrar`);
    
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt)
        })
    });
}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, () => {
            readline.close();
            resolve()
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}