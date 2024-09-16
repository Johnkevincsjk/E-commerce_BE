const express = require('express')
const { get_all_products, get_single_product } = require('../Controllers/ProductControllers')

const routes = express.Router()


routes.get('/products', get_all_products)

routes.get('/product/:id', get_single_product)


module.exports = routes