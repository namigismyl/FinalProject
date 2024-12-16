const mongoose = require("mongoose")
const Games = mongoose.model("Games", new mongoose.Schema({
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
    bigImg:{
        type:String,
        require:false
    },
    nameImg:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require:false
    }
    

}))
module.exports = { Games }