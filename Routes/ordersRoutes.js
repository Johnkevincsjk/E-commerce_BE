const express = require('express')
const { order_controller } = require('../Controllers/orderController')


const order_route = express.Router()


order_route.post('/orders', order_controller)


module.exports = { order_route }