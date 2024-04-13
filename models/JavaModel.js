// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  college: String,
  year: String,
});

module.exports = mongoose.model('java', userSchema);
