const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
port = 5000
app.use(morgan('dev'))
app.use(express.json())

app.use('/blog',require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))

app.use('/', (req, res) => {
  res.send('hey')
})

app.listen(port, () => {
  console.log(`server is running on port: ${port}...`);

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
  });
})