const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect( process.env.DATAB)
            console.log(`Connected to Mongodb database: ${conn.connection.host}`)
         }   catch (error) {
            console.log(`Error in mongodb ${error}`)
            process.exit(1)
    }
}
module.exports = connectDB;