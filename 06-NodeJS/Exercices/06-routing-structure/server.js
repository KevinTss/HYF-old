const http = require('http')
const app = require('./app')

const PORT = 5001

// Create Web Server
http
  .createServer(app)
  .listen(
    PORT,
    () => console.info(`Node app runningnat localhost:${PORT}`)
  )