const express = require('express')
const app = express()

// Middleware
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(3000)