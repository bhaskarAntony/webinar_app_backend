// models/user.js
const mongoose = require('mongoose');

const LmsSchema = new mongoose.Schema({
  videos:[{type:String}],
  workShopPdf:String,
  date:String,
  time:String
});

module.exports = mongoose.model('lms', LmsSchema);
