const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views','./template')

app.get('/:a/:b', (req, res) => {
    const pval = req.params
    res.send(`<h1>This path variable is ${pval.a} and  ${pval.b}</h1>`)
    
})

app.post('/', (req, res) => {
    console.log("Checking Post request")
})

app.listen(8080,() => {
    console.log('listening on 8080')
})