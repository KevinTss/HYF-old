const express = require('express')
const lodash = require('lodash')
const app = express()
const bodyParser = require('body-parser')
const {users, createUser, updateUser} = require('./models/user.js')
const port = 3000

app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  const users = createUser(req.body)
  res.send(users)
})

app.put('/users/:id', (req, res) => {
  const users = updateUser(req.params.id, req.body)
  res.send(users)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
