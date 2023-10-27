// models/user.js
const mongoose = require('mongoose');

const attendeesSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});

module.exports = mongoose.model('Attendees', attendeesSchema);
