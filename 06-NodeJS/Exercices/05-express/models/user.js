const users = [
  {id: 1, name: 'John Doe', email: 'john@hyf.com'},
  {id: 2, name: 'Jane Doe', email: 'jane@hyf.com'}
]

const createUser = data => {
  users.push(data);

  return users;
}

const updateUser = (id, data) => {
  const index = users.findIndex(user => user.id === id);

  users[index].name = data.name;
  users[index].email = data.email;

  return users;
}

module.exports = {
  users,
  createUser,
  updateUser
}
