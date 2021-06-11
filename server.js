require('dotenv').config();
const express = require('express')

const app = express();

const connection = require('./config/db.js')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json({
  extended: false
}))
// Routes Config

app.use('/', require('./routes/redirect'))
app.use('/api', require('./routes/url'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('started server on prt' + PORT)
})