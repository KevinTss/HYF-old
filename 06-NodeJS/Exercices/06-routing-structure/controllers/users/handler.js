const { getUsers, updateUser, createUser } = require('./queries')

const getList = (req, res) => {
  const users = getUsers()

  res.json({
    data: users
  })
}

const updateItem = (req, res) => {
  const user = updateUser(req.params.id, req.body)

  res.json({
    data: user
  })
}

const createItem = (req, res) => {
  const users = createUser(req.body)

  res.json({
    data: users
  })
}

module.exports = { getList, updateItem, createItem }