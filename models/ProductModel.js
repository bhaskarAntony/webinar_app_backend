const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('products', productSchema)