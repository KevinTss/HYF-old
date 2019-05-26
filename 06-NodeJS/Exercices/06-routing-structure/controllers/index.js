module.exports = app => {
  app.use('/api/users', require('./users/index.js').routes)
}