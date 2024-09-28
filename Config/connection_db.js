const mongoose = require('mongoose')


const database_connection = () => {

    mongoose.connect('mongodb+srv://johnkevincsjk:6Fqo2TBnD8zvpzdM@kingswearcluster1.ybwbt.mongodb.net/KingsWear').then((con) => {
        console.log('MongoDB connected to host' + con.connection.host)
    })

}


module.exports = database_connection


