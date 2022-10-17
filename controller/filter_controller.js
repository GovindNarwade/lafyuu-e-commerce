const product = require("../model/Product_mode")
exports.getProductbyPriceRange = async(req,res) =>{
try {
    const  result = await product.find({ProductPrize:{$lte:5000}} && {ProductPrize:{$lte:1000}} )
    res.json({
        success:true,
        message:"get Product by Price Range",
        data : result
    })
} catch (error) {
    res.json({
        success:false,
        message:"Something went Worng",
        data : null
    })
}
}