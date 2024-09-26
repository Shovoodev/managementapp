const mongoose = require('mongoose')

const uri = process.env.MONGO_URI
const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(uri)
        console.log(`connection stablist on ${connect.connection.host}` )
    }
    catch(error){
        process.exit(1)
    }
}


module.exports = connectDB ;