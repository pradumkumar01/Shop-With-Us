const mongoose = require("mongoose")

const mongoDbUrl='Enter Your url'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}

