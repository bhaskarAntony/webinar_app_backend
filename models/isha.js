// models/user.js
const mongoose = require('mongoose');

const ishaSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('isha', ishaSchema);
