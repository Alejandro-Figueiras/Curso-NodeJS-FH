import inquirer from 'inquirer';
//require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: "1. Crear Tarea"
            },
            {
                value: '2',
                name: "2. Listar Tarea"
            },
            {
                value: '3',
                name: "3. Listar Tareas Completadas"
            },
            {
                value: '4',
                name: "4. Listar Tareas Pendientes"
            },
            {
                value: '5',
                name: "5. Completar Tareas"
            },
            {
                value: '6',
                name: "6. Eliminar Tareas"
            },
            {
                value: '0',
                name: "0. Salir"
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

export const pausa = async() => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${"ENTER".green} para continuar...`
        }
    ])
}