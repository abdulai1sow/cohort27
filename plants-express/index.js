import express from 'express'

const app = express()
const PORT = 3000

//routes
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];
//more specific routes need to be on top
app.get('/', (req, res) => {
  console.log(req.params);
  res.send('<h1>welcome to the express</h1>')
})

app.get('/plants', (req, res) => {
  res.send('plants')
})

app.get('/plants/:indexPlants', (req, res) => {
  const {indexPlants} = req.params
  console.log(req.params);
  console.log(req.params.indexPlants);
  res.send(plants[indexPlants])
})


app.get('/fixed/:index', (req, res) => {
  const {index} = req.params
  if (plants[index]) {
    res.send(plants[index])
  } else {
    res.send('connot find that index: ' + index)
  }
})

const db = ['amadou','mariam', 'diallo', 'sow' ]
//===query param
//querys are good for alot of data
app.get('/search/:firstname', (req, res) => {
  const {username} = req.params
  console.log(req.params);
  console.log(req.query);

  for (let user of db) {
    console.log(user);
    if (user === username) {
      console.log(username);
      return res.send(`welcome ${username}`)
    } else {
      console.log(`user not found!!`);
    }
  }
})


//this is a parameter and needs to be in the bottom
app.get('/:color', (req, res) => {
  const { color } = req.params
  res.send(`${ color }`)
})

app.get('/hello/:firstName/:lastName', (req, res) => {
  const { firstName, lastName } = req.params
  // const { lastName } = req.params
  res.send(`hello ${firstName} ${lastName} `)
})

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
})