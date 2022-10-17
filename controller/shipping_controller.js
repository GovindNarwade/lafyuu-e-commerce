const shipping = require("../model/Shipping_model")
exports.createshippingDetails = async(req,res)=>{
try {
    const result = await shipping.create({
        ShippingId:Math.floor(Math.random()*10000),
        ShippingDate:req.body.ShippingDate,
        ShippingType:req.body.ShippingType,
        ProductId: req.body.ProductId,
        Address:req.body.Address,
    })
res.json({
    success:true,
    message:"Create shipping Details",
    data:result,
})
} catch (error) {
    res.json({
        success:false,
        message:"Something went worng",
        data:null,
    })
}
}
exports.GetAllshippingDetails = async(req,res)=>{
    try {
        const result = await shipping.find()
    res.json({
        success:true,
        message:"Get All shipping Details",
        data:result,
    })
    } catch (error) {
        res.json({
            success:false,
            message:"Something went worng",
            data:null,
        })
    }
    }
    exports.deleteShippingDetails = async(req,res)=>{
        try {
            const result = await shipping.findOneAndDelete({ShippingId:req.params.ShippingId})
        res.json({
            success:true,
            message:"Delete shipping Details",
            data:null,
        })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
        exports.updateshippingDetails = async(req,res)=>{
            try {
                const result = await shipping.findOneAndUpdate({ShippingId:req.body.ShippingId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update shipping Details",
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