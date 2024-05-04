// models/user.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Subjet: String,
  Message: String,
});

module.exports = mongoose.model('contactForm', contactSchema);
