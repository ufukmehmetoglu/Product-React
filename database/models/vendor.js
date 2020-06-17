const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]
})


const Vendor = mongoose.model('vendor',vendorSchema)

module.exports= Vendor;