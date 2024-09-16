const express = require('express')
const APP = express()
const con_data = require('./Config/connection_db')
const cors = require('cors')
const routes = require('./Routes/productRoutes')
const { order_route } = require('./Routes/ordersRoutes')
const { AuthRoute } = require('./Routes/authRoutes')
const BuydetailsRoutes = require('./Routes/BuydetailsRoutes')
APP.use(express.json())
APP.use(cors())
const dotenv = require('dotenv').config({ path: "./Config/.env" })


con_data()
APP.use('/kingswear', routes)
APP.use('/kingswear', order_route)
APP.use('/auth', AuthRoute)
APP.use('/buy', BuydetailsRoutes)


APP.listen(process.env.PORT, () => {
    console.log(`Server is live on ${process.env.PORT}`)
})