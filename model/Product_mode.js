const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    ProductId:{
        type:Number
    },
    ProductName:{
        type:String,
      
    },
    ProductDescription:{
        type:String,
      
    },
    ProductPrize:{
        type:Number,
      
    },
    ProductSize:{
        type:String,
      
    },
    ProductImage:{
        type:String
    },
    ProductCondition:{
        type:String
    },
    BuyingFormat:{
        type:String
    },
    Productlocation:{
        type:String
    },
    ShowOnly:{
        type:String
    }


},{
timestamps:true
})
module.exports = mongoose.model("product",productSchema)