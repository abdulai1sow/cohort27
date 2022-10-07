const express = require('express')
const morgan = require('morgan')
const pokemons = require('./models/pokemons')
// const Index = require('./views/Index')
// const Index = require('./views/Index')

const app = express()
const port = 4000

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
//app settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.send('welcome to the pokemon App!')
})
//=======GET show all pokemon======
app.get('/pokemons', (req, res) => {
  // console.log(`${pokemons}`);
  res.render('Index', {pokemons: pokemons})
})
//====GET show ONE pokemon======
app.get('/pokemons/:pokeId', (req, res) => {
  // console.log(get);
  const { pokeId } = req.params
  res.render('Show', {
   pokemons: pokemons[pokeId]
 })
})


app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
})