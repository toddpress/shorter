import mongoose from 'mongoose'

const DB_URI = process.env.MAKESHIFT_WOOL

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const { connection } = mongoose;

export default connection;