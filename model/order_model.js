const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    ProductId:{
        type:Number,
    },
    OrderId:{
        type: Number
    },
    Total:{
        type:Number
    }
},{
timestamps:true
})
module.exports = mongoose.model("order",OrderSchema)