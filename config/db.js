const mongoose = require('mongoose')
const DB_URI = process.env.MAKESHIFT_WOOL

console.log('DB_URL ', DB_URI)
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const { connection } = mongoose;
module.exports =  connection;