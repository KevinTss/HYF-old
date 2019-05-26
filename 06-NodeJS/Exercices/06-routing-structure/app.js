const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))

require('./controllers')(app)

module.exports = app