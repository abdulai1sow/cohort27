import express from 'express'

const app = express()
const port = 3000

//====greeting
app.get('/greeting/:name', (req, res) => {
  const { name } = req.params
  if (name === 'Jimmy-boy') {
    res.send(`wow! hello there ${name}`)
  } else {
    res.send(`Hello, stranger`)
  }
})

//====tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const { total, tipPercentage } = req.params
  let tipCal = (tipPercentage / total ) * total
  res.send(`the tip is ${tipCal}`)
})

//====magic 8 ball


const random = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
]
const milRandom = random[Math.floor(Math.random() * random.length)] 
console.log(milRandom);
app.get('/magic/:id', (req, res) => {
  const { id } = req.params
  const url = 'Will%20I%20Be%20A%20Millionaire'
  res.send(`<h1>${url} <br/> <h1/> <h1>${milRandom}<h1/>`)
  // res.send(id === url ? `<h1>${milRandom}<h1/>` && `<h1> ${url} <h1/>` : '')
 
})



app.listen(port, () => {
  console.log(`port is running ${port}...`);
})