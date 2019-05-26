const routes = require('express').Router()
const { getList, updateItem, createItem } = require('./handler')

routes.get('/', getList)
routes.put('/:id', updateItem)
routes.post('/', createItem)

module.exports = { routes }
