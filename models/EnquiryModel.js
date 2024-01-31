const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('enquiries', EnquirySchema);