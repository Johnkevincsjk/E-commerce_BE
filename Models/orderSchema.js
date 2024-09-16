const mongoose = require('mongoose')


const order_schema = new mongoose.Schema({

    cart: Array,
    Total_amount: String,
    Status: String,
    created_at: Date

})

const order_model = mongoose.model('order', order_schema)

module.exports = order_model