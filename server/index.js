const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const Product = require('../database/models/product')
const Brand = require('../database/models/brand')

const db = require('../database/index')
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../static')))

app.get('/all/product', (req,res) => {
    Product.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => res.status(404).send('Error getting',err))
})

app.post('/add/product', (req,res) => {
    const { name, categories, price, quantity, tags, isActive} = req.body;
    Product.create({name,categories,price,quantity,tags,isActive})
        .then((data) => {
            res.status(200).send('We add the product')
        })
        .catch(err => res.status(404).send('Error getting',err))
})

app.get('/all/brand',(req,res) => {
    Brand.find()
    .then(cars => res.status(200).send(cars))
    .catch(err => res.status(400).send('error', err))

})

app.post('/add/brand', (req, res) => {
    const { _id } = req.query;
    const { name } = req.body; 
     Brand.create({name, products: _id  })
    .then((brand)=> Product.findOneAndUpdate({_id}, {$push: {brands: brand}}))
    .then(response => res.status(200).send('Added'))
    .catch(err => {res.status(400).send('Error adding comment', err)});
})


app.listen(port, () => console.log(`Listening port ${port}`))