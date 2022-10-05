const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const vegetablesArray = require('./models/vegetables')
//app init
const app = express()
const port = 5000
//middleware
app.use(morgan('dev'))
//when ever you need get access to forms
app.use(express.urlencoded({ extended: false }))
//create your own middleware, read data from post requests
app.use((req, res, next) => {
  console.log('i run for all routes');
  next()
})
//app settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



//root routes: testing
app.get('/', (req, res) => {
  res.send('hello world')
})
//index routes get all fruits
// app.get('/fruits', (req, res) => {
//   res.send(fruits)
// })

//index rout: get all fruits
app.get('/fruits', (req, res) => {
  res.render('fruits/Index', { fruits: fruits })
  // console.log(fruits);
})

app.post('/fruits', (req, res) => {
  console.log(req.body);
  const { readyToEat } = req.body
  readyToEat === 'on' ? true : false  
  fruits.push(req.body)
  //will send this data to the fruits array
  res.redirect('/fruits')
})

//====render a form
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New')
})

//show routes; show single fruit
app.get('/fruits/:indexArray', (req,res) => {
  const { indexArray } = req.params
  // res.send(fruits[indexArray])
  res.render('fruits/Show', {
    fruit: fruits[indexArray],//this will be avalible inside the jsx file
    date: new Date().getFullYear()
  })//this will look at the Show.jsx file
})
///===vegetables api
app.get('/vegetables', (req, res) => {
  res.render('vegetables/Index', {vegetables: vegetablesArray})
})

///===single vegetable api
app.get('/vegetables/:indexArray', (req, res) => {
  const {indexArray} = req.params
  res.render('vegetables/Show', {
    vegetable: vegetablesArray[indexArray]
  })
})


app.listen(port, () => {
  console.log(`server is running on port ${port}..`);
})