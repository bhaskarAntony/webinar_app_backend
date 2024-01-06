const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    options:[String],
    answer:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('mcqTest', TestSchema)