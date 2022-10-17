const product = require("../model/Product_mode")
exports.getProductbyPriceRange = async(req,res) =>{
try {
    const  result = await product.find({ProductPrize:{$lte:req.body.Price1} }  )
    const  result1 = await product.find({ProductPrize:{$gte:req.body.Price2}}  )
    if((result && result1 )){
        res.json({
            success:true,
            message:"get Product by Price Range",
            data : result
        })
    }
    else{
        res.json({
            message :"Please provide Correct Price Range "
        })
    }
    
} catch (error) {
    res.json({
        success:false,
        message:"Something went Worng",
        data : null
    })
}
}