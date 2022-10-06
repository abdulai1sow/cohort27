const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
const vegetablesArray = require('./models/vegetables')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
//save mongodb passcode
require('dotenv').config()
const Fruit = require('./models/FruitModel')

//app init
const app = express()
const port = 5000
//middleware
app.use(morgan('dev'))
//when ever you need get access to forms
app.use(express.urlencoded({ extended: false }))
//method over ride
app.use(methodOverride('_method'))
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
  Fruit.find({}, (err, fruitsDb) => {
    if (err) {
      console.log(err);
    }
    //find all document in db
    res.render('fruits/Index', { fruits: fruitsDb })
  })
  // res.render('fruits/Index', { fruits: fruits })
  // console.log(fruits);
})

//====create new fruit
app.post('/fruits', (req, res) => {
  console.log(req.body);
  // let { readyToEat } = req.body
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // readyToEat === 'on' ? readyToEat = true : readyToEat = false  
  console.log(req.body);
  fruits.push(req.body)
  //will send this data to the fruits array
  
  //using model to create new data on mongodb
  Fruit.create(req.body, (err, createdFruit) => {
    console.log(req.body);
    if (err) {
      console.log(err);
    }
    // res.send(createdFruit)
    console.log(createdFruit);
  })
  res.redirect('/fruits')
})

//====render a form
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New')
})

//=======show routes; show single fruit
app.get('/fruits/:indexArray', (req, res) => {
  const { indexArray } = req.params
  //find fruit in db
  Fruit.findById(indexArray, (err, foundFruit) => {
    if(err) {
      console.log(err);
    }
    res.render('fruits/Show', {
      fruit: foundFruit,
      date: new Date().getFullYear
    })
  })
})

//============DELETE from database
app.delete('/fruits/:id', (req, res) => {
  const { id } = req.params
  //remove will give us back the data
  //delete will not give us back data
  Fruit.findByIdAndRemove(id, (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
      res.status(403).send('bad request')
    }
    res.redirect('/fruits')
  })
})
///====EDIT FILE
app.get('/fruits/:id/edit', (req, res) => {
  const {id}=req.params
  //find the fruit in the db using the id
  Fruit.findById(id, (err, foundFruit) => {
    // console.log('right herr', foundFruit);
    if (err) {
      console.log(err);
      res.status(403).send('id not found')
    }
    res.render('fruits/Edit', {fruit: foundFruit})
  })
  //render the view and pass the data from the fruit
})

//=========UPDATE THE DATA
app.put('/fruits/:id', (req, res) => {
  const {id} = req.params
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.findByIdAndUpdate(id, req.body, (err, updatedFruit) => {
    if (err) {
      console.log(err);
      res.status(403).send('cannot update')
    }
    res.redirect(`/fruits/${id}`)
  })
})
//======================*********************VEGETABLE*******************==============

//===create new vegetable
app.post('/vegetables', (req, res) => {
  const { readyToEat } = req.body
  readyToEat === 'on' ? true : false
  vegetables.push(req.body)
  res.redirect('/vegetables')
})
//===render the form
app.get('/vegetables/new', (req, res) => {
  res.render('vegetables/New')
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
  
  
  //... and then farther down the file
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
  });
})