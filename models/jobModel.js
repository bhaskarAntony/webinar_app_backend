// models/user.js
const mongoose = require('mongoose');

const LmsSchema = new mongoose.Schema({
    jd:{
        type:String,
        required:true
    },
    technology:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    package:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    openings:{
        type:String,
        required:true
    },
   companyName:{
    type:String,
    required:true
   },
   location:{
    type:String,
    required:true
   },
   bond:{
    type:String,
    required:true
   },
    date:{
        type:Date,
        default:Date.now()
    },
});

module.exports = mongoose.model('jobs', LmsSchema);
