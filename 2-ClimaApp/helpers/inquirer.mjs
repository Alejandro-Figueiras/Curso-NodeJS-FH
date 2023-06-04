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

export const borrarTareas = async(tareas = []) => {
    const choices = tareas.map((tarea, idx) => {
        return {
            value: tarea.id,
            name: `${`${idx+1}.`.green} ${tarea.desc}`
        }
    })
    choices.unshift({
        value: '0',
        name: `${'0.'. green} Cancelar`
    })
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar tarea',
            choices
        }
    ]
    const { id } = await inquirer.prompt(question);
    return id;
}

export const completarTareas = async(tareas = []) => {
    const choices = tareas.map((tarea, idx) => {
        return {
            value: tarea.id,
            name: `${`${idx+1}.`.green} ${tarea.desc}`,
            checked: (tarea.completadoEn)?true:false
        }
    })
    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Borrar tarea',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(question);
    return ids;
}

export const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
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