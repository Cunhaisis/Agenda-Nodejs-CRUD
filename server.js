const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mongouser:<password>@cluster0.yi0nd.mongodb.net/<crud-nodejs>?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) =>{
    if(err) return console.log(err)
    db = client.db('crud-nodejs')
})
app.use(bodyParser.urlencoded( { extended: true }))

app.listen(3000, function(){
    console.log('server running in port 3000')
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')

app.post('/show', (req, res) => {
    console.log(req.body)
})