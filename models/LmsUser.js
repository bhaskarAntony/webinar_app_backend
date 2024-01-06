const mongoose = require('mongoose');

const LmsuserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    firstday:[
        {
        unit1:Number,
        unit2:Number,
        unit3:Number,
        unit4:Number,
        }

    ],
    userId:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('lmsuser', LmsuserSchema);