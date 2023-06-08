require("dotenv").config()
const Busquedas = require('./models/busquedas');

const main = async() => {
    const inquirer = await import('./helpers/inquirer.mjs');

    const busquedas = new Busquedas();

    while (true) {
        const opt = await inquirer.inquirerMenu();

        switch(opt) {
            case 1: 
                const termino = await inquirer.leerInput("Ciudad:");
                const lugares = await busquedas.buscarCiudad(termino);

                const index = await inquirer.listarLugares(lugares);
                if (index == -1) break;

                const lugar = lugares[index];
                
                // mostrar resultados
                console.log(`\n=== Información del tiempo ===`.green)
                console.log(`Ciudad: ${lugar.nombre}`)
                console.log(`Latitud: ${lugar.lat}`)
                console.log(`Longitud: ${lugar.lng}`)
                console.log(`Temperatura:`)
                console.log(`Máxima:`)
                console.log(`Mínima:`)

                await inquirer.pausa();
                break;
        }
        if (opt == 0) {
            break;
        }
    }
}

main();