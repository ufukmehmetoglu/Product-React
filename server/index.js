const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const Product = require('../database/model.js')
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../static')))

// app.get('/api/nav', (req,res) => {
//     Product.find()
//         .then((data) => {
//             res.status(200).send(data)
//         })
//         .catch(err => res.status(404).send('Error getting',err))
// })


app.listen(port, () => console.log(`Listening port ${port}`))