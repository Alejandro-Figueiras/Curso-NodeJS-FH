const fs = require('fs');

const ruta = './db/data.json';

const guardarDB = (data) => {
    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    fs.writeFileSync(ruta, JSON.stringify(data));
}
const leerDB = () => {
    if (!fs.existsSync(ruta)) {
        return null;
    }
    const info = fs.readFileSync(ruta, {encoding:'utf-8'});
    const data = JSON.parse(info);
    return data;
}
module.exports = {
    guardarDB,
    leerDB
}