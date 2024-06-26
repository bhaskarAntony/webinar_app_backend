// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  course: String,
  year:String,
  aggr: String,
  branch: String
});

module.exports = mongoose.model('college', userSchema);
