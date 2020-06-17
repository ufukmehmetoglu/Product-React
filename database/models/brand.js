const mongoose = require('mongoose')
// const db = require('../index.js')

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]
})


const Brand = mongoose.model('brand',brandSchema)

module.exports= Brand;