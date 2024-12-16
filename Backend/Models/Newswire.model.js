const mongoose = require("mongoose")
const News = mongoose.model("News", new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    detailsImg:{
        type:String,
        require:false
    },
    detailsHeadDesc:{
        type:String,
        require:false
    },
    detailsMainDes:{
        type:String,
        require:false
    },
    // maindes2:{
    //     type:String,
    //     require:false
    // },
    // maindes3:{
    //     type:String,
    //     require:false
    // },
    detailSecImg:{
        type:String,
        require:false
    },
    detailSecTitle:{
        type:String,
        require:false
    },
    detailSecDes:{
        type:String,
        require:false
    },
    detailRdImg:{
        type:String,
        require:false
    },
    detailRdTitle:{
        type:String,
        require:false
    },
    detailRdDes:{
        type:String,
        require:false
    }

}))
module.exports = { News }


