module.exports = class Busquedas {
    historial = [
        "Madrid",
        "Bogotá",
        "Barcelona"
    ]

    constructor() {
        // TODO: leer db si existe
    }

    async buscarCiudad(lugar = "") {
        // peticion http
        console.log(lugar);

        return []; // retornar las busquedas
    }
}