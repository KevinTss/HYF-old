
const users = require('../../models/users')

const getUsers = () => {
  return users
}

const createUser = data => {
  users.push(data);

  return users;
}

const updateItem = (id, data) => {
  const index = users.findIndex(user => user.id === id);

  users[index].name = data.name;
  users[index].email = data.email;

  return users;
}

module.exports = {
  getUsers,
  createUser,
  updateItem
}
