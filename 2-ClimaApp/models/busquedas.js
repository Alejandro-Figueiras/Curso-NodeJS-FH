const { default: axios } = require("axios");

module.exports = class Busquedas {
    historial = [
        "Madrid",
        "Bogotá",
        "Barcelona"
    ]

    constructor() {
        // TODO: leer db si existe
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            limit: 5,
            language: 'es'
        }
    }

    async buscarCiudad(lugar = "") {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            })

            const resp = await instance.get();

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); // retornar las busquedas
        } catch (error) {
            return []; //  resultados vacios
        }
    }
}