import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${"1.".green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${"2.".green} Historial`
            },
            {
                value: 0,
                name: `${"0.".green} Salir`
            }
        ]
    }
]

export const inquirerMenu = async() => {
    console.clear();
    console.log("===============================".green);
    console.log("    Seleccione una opción".green);
    console.log("===============================\n".green);

    const { opcion } = await inquirer.prompt(menuOpts);
    return opcion;
}

export const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }
                return true;
            }

        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc
}

export const listarLugares = async(lugares = []) => {
    const choices = lugares.map((lugar, i) => {
        return {
            value: i,
            name: `${`${i+1}.`.green} ${lugar.nombre}`
        }
    })
    choices.push({
        value: -1,
        name: `${'0.'. green} Cancelar`
    })
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecciona la ciudad',
            choices
        }
    ]
    const { id } = await inquirer.prompt(question);
    return id;
}

export const pausa = async() => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${"ENTER".green} para continuar...`
        }
    ])
}