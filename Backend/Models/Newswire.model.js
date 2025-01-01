const mongoose = require("mongoose");
const News = mongoose.model("News", new mongoose.Schema({
    images: {
        type: [String],
        default: [],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    detailsHeadDesc: {
        type: String,
        required: false,
    },
    detailsMainDes: {
        type: String,
        required: false,
    },
    detailSecTitle: {
        type: String,
        required: false,
    },
    detailSecDes: {
        type: String,
        required: false,
    },
    detailRdTitle: {
        type: String,
        required: false,
    },
    detailRdDes: {
        type: String,
        required: false,
    },
    // isActive: { // Yeni sahə əlavə etdik
    //     type: Boolean,
    //     default: true,
    // }
}));
module.exports = { News };
