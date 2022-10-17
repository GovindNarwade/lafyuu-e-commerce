const mongoose = require("mongoose")

const adddressSchema = mongoose.Schema({
    AddressId:{
        type:Number
    },
    Country:{
        type:String,
      
    },
    FirstName:{
        type:String,
      
    },
    LastName:{
        type:String,
      
    },
    StreetAddress:{
        type:String
    },
    StreetAddress2:{
        type:String
    },
    City:{
        type:String
    },
    State:{
        type:String
    },
    ZipCode:{
        type:String
    },
    PhoneNumber:{
        type:Number
    }

},{
timestamps:true
})
module.exports = mongoose.model("adddress",adddressSchema)