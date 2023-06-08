require("dotenv").config()
const Busquedas = require('./models/busquedas');

const main = async() => {
    const inquirer = await import('./helpers/inquirer.mjs');

    const busquedas = new Busquedas();

    while (true) {
        const opt = await inquirer.inquirerMenu();
        console.log(opt);

        switch(opt) {
            case 1: 
                // mostrar el mensaje
                const termino = await inquirer.leerInput("Ciudad:");
                const lugares = await busquedas.buscarCiudad(termino);
                console.log(lugares);
                // buscar el lugar

                // seleccionar lugar

                // mostrar resultados
                console.log(`\nInformación del tiempo\n`.green)
                console.log(`Ciudad:`)
                console.log(`Latitud:`)
                console.log(`Longitud:`)
                console.log(`Temperatura:`)
                console.log(`Máxima:`)
                console.log(`Mínima:`)
                break;
        }
        if (opt == 0) {
            break;
        }
        await inquirer.leerInput("Pausa");
    }
}

main();