const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const productSchema = new Schema({
   name: String,
   categories: Array,
   price: Number,
   quantity: Number,
   tags: Array,
   isActive: Boolean,
   brands:[{
      type: Schema.Types.ObjectId,
      ref: 'brand'
  }],
   vendors: [{
      type: Schema.Types.ObjectId,
      ref: 'vendor'
  }]
})


const Product = mongoose.model('product',productSchema)

module.exports= Product;