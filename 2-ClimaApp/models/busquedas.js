const { default: axios } = require("axios");
const fs = require('fs')

module.exports = class Busquedas {
    historial = []
    dbPath = './db.json'

    constructor() {
        this.leerDB()
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            limit: 10,
            language: 'es'
        }
    }

    get paramsOWM() {
        return {
            appid: process.env.OPENWEATHERMAP_KEY,
            units: 'metric',
            lang: 'es'
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
            }));
        } catch (error) {
            return []; //  resultados vacios
        }
    }

    async consultarClima(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: { ...this.paramsOWM, lat, lon }
            })

            const {weather, main} = (await instance.get()).data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch(error) {
            console.log(error)
        }
    }

    agregarHistorial(lugar = '') {
        if (this.historial.includes(lugar)) {
            this.historial.splice(this.historial.indexOf(lugar), 1);
        }
        this.historial.unshift(lugar);

        this.historial.splice(15,80)

        this.guardarDB() 
    }

    leerDB() {
        if (fs.existsSync(this.dbPath)) {
            this.historial = JSON.parse(fs.readFileSync(this.dbPath, {encoding: 'utf-8'}))
        }
    }
    
    guardarDB() {
        fs.writeFileSync(this.dbPath, JSON.stringify(this.historial))
    }
}