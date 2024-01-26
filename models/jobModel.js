// models/user.js
const mongoose = require('mongoose');

const LmsSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    jd:{
        type:String,
        required:true
    },
    technology:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    package:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
});

module.exports = mongoose.model('jobs', LmsSchema);
