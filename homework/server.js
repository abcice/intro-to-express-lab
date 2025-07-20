const express = require('express')
const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
app.get('/', (req,res) => {
    console.log(req)
    res.send('Hi')
})

app.get('/greetings/:userName', (req, res) => {

    res.send(`<h1>Hello there, ${req.params.userName}!</h1>`)
})

app.get('/roll/:dicNumber', (req, res) => {
    const num = parseInt(req.params.dicNumber, 10)
    if(isNaN(num)){

        res.send(`<h1>'You must specify a number.'</h1>`)

    }
    else {
        res.send(`<h1>you rolled a ${req.params.dicNumber}!</h1>`)

    }
})



app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
    if(isNaN(index) || index >= collectibles.length) {

        res.send(`<h1>This item is not yet in stock. Check back soon!</h1>`)
    }
    else {
        const item = collectibles[index];
             res.send(`<h1>So, you want ${item.name}? For ${item.price}, it can be yours!</h1>`)

    }

})
app.get('/shoes/min-price/:minPrice', (req, res) => {
    const minPriceShoes = shoes.filter(shoe => shoe.price <=parseInt(req.params.minPrice))
   res.send(minPriceShoes)
})

app.get('/shoes/max-price/:maxPrice', (req, res) => {
    const maxPriceShoes = shoes.filter(shoe => shoe.price >=parseInt(req.params.maxPrice))
   res.send(maxPriceShoes)
})

app.get('/shoes/type/:type', (req, res) => {
    const shoesType = shoes.filter(shoe => shoe.type === req.params.type)
   res.send(shoesType)
})
app.get('/shoes', (req,res) => {
    res.send(shoes)
})

app.listen(3000, () => {
    console.log('working!')
})