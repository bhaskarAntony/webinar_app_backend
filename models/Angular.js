// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  coupon: String,
  college:String,
  pass:String
});

module.exports = mongoose.model('Angular', userSchema);
