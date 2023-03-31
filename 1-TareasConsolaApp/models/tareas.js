const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArr.forEach((tarea, i) => {
            const { desc, completadoEn} = tarea;
            const estado = (completadoEn)?`${completadoEn}`.green:'Pendiente'.red;
            console.log(`${`${i+1}.`.green} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas( completadas = true) {
        let i = 0;
        this.listadoArr.forEach((tarea) => {
            const { desc, completadoEn} = tarea;
            if (completadas && completadoEn) {
                console.log(`${`${++i}.`.green} ${desc} :: ${`${completadoEn}`.green}`);
            } else if (!completadas && !completadoEn) {
                console.log(`${`${++i}.`.red} ${desc}`);
            }
        })
    }

    borrarObjeto(id) {
        if (this._listado[id]) delete this._listado[id];
    }

    toggleCompletadas(ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;