//load express
const express = require('express')
const port = 3002
//create express app
const app = express();

//routes
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

app.get('/posts', (req, res) => {
  res.send('<h3>welcome to the server</h3>')
})

app.get('/home', (req, res) => {
  res.send('<h2>home page</2>')
})
app.listen(port, function () {
  console.log('server listening in port: 3002');
})