const express = require('express')
const hbs = require('hbs')

const app = express()

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Middleware para elementos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "A",
        titulo: "Road Trip by TEMPLATED"
    });
}) 

app.get('/generic', (req, res) => {
    res.render('generic')
})

app.get('/elements', (req, res) => {
    res.render('elements')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000)