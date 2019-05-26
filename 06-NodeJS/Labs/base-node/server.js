
const myBeautyfullHTTP = require('http')
const app = require('./app')

const { PORT } = require('./config')

// Create Web Server
myBeautyfullHTTP.createServer(app).listen(
    PORT,
    () => console.info(`Node app runningnat localhost:${PORT}`)
  )
