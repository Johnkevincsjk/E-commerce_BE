const express = require('express')
const { BuyDeatailsController } = require('../Controllers/BuyDetailsController')


const BuydetailsRoutes = express.Router()


BuydetailsRoutes.post('/buydetails', BuyDeatailsController)

module.exports = BuydetailsRoutes