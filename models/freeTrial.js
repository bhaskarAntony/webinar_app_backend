// models/user.js
const mongoose = require('mongoose');

const trialSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  college: String,
  year: String,
  selectedCourse:String
});

module.exports = mongoose.model('courseFreeTrial', trialSchema);
