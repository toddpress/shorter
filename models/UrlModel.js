const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
  code: String,
  shortUrl: String,
  longUrl: String,
  date: {
    type: String,
    default: Date.now
  }
})

const Url = mongoose.model('Url', UrlSchema)

export default Url;