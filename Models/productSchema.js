const mongoose = require('mongoose')

const Product_schema = new mongoose.Schema({

    img: String,
    title: String,
    price: String,
    off: String,
    catagory: String
})



const products_model = mongoose.model('products_datas', Product_schema)

module.exports = products_model