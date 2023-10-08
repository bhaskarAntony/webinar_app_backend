// models/influencer.js
const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  name: String,
  email: String,
  couponCode: String,
});

module.exports = mongoose.model('Influencer', influencerSchema);
