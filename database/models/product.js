const mongoose = require('mongoose')
// const db = require('../index.js')

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
   productID: Number,
   productType: String,
   name: String,
   category: String,
   price: Number,
   quantity: Number,
   isActive: Boolean,
})


const Product = mongoose.model('Product',productSchema)

module.exports= Product;