// models/user.js
const mongoose = require('mongoose');

const hubSchema = new mongoose.Schema({
  message:{
    type:String,
    required:true
  },
  userId:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  },

});

module.exports = mongoose.model('hub', hubSchema);
