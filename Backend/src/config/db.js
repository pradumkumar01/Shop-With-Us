const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://pradumkumar7929:CKKePrJ847SAE3et@cluster0.rzg6del.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}

