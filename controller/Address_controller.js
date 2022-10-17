const Address = require("../model/address_model")
exports.CreateAddressDetails = async(req,res)=>{
    try {
            const result = await Address.create({
                AddressId:Math.floor((Math.random()*100000)+1),
                Country:req.body.Country,
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                StreetAddress:req.body.StreetAddress,
                StreetAddress2:req.body.StreetAddress2,
                City:req.body.City,
                State:req.body.State,
                ZipCode:req.body.ZipCode,
                PhoneNumber:req.body.PhoneNumber,
            })
            res.json({
                success:true,
                message:"Create Address Details",
                data:result
            })
        
       
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getAllAddress = async(req,res)=>{
    try {
        const result = await Address.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Address ",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.deleteAddressDetails = async(req,res)=>{
    try {
        const result = await Address.findOneAndDelete({CategoryId:req.params.CategoryId})
        res.json({
            success:true,
            message:"Delete Address Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateAddressDetails = async(req,res)=>{
    try {
        const result = await Address.findOneAndUpdate({CategoryId:req.body.CategoryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Address Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}