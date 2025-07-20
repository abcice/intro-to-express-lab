const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log(req)
    res.send('Hi')
})

app.get('/:userName', (req, res) => {

    res.send(`<h1>Hello there, ${req.params.userName}!</h1>`)
})
app.listen(3000, () => {
    console.log('working!')
})