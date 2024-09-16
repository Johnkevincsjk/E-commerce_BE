const mongoose = require('mongoose')


const userschema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    mailid: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart: {
        type: Array
    },
    buy_details: {
        receiverName: {
            type: String
        },
        address: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number
        }
    }

})

const user_model = mongoose.model('userdata', userschema)

module.exports = user_model