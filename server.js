const express = require('express')
const app = express()

app.get('/test', (req, res) => res.send('React app up and running !'))

app.use(express.static('build'))

app.listen(3002, () => console.log('App listening on port 3002!'))