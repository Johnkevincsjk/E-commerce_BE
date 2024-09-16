const mongoose = require('mongoose')


const database_connection = () => {

    mongoose.connect(process.env.MONGOOSE_URL).then((con) => {
        console.log('MongoDB connected to host' + con.connection.host)
    })

}


module.exports = database_connection


