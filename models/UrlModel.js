const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  code: String,
  longUrl: String,
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('Url', UrlSchema);
