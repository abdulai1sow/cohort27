const express = require('express')
const pokemons = require('./models/pokemon')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('welcome to the pokemon App!')
})
//show all pokemon
app.get('/pokemons', (req, res) => {
  console.log(pokemons);
  res.send(pokemons)
})

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
})