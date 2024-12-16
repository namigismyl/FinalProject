const mongoose = require("mongoose")
const products = mongoose.model("products", new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:false
    },
    detImg:{
        type:String,
        require:false
    }


}))
module.exports = { products }