const express = require("express")
const {createProductDetails,GetAllProductDetails,DeleteProductDetails} = require("../controller/Product_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *         - ProductId
 *         - ProductName
 *         - ProductDescription
 *         - ProductPrize
 *         - ProductSize
 *         - ProductImage
 *         - ProductCondition
 *         - Productlocation
 *         - BuyingFormat
 *         - ShowOnly
 *       properties:
 *         ProductId:
 *           type: integer
 *           description: AutoGenerated
 *         ProductName:
 *           type: string
 *           description: ProductName
 *         ProductDescription:
 *           type: string
 *           description: DepartmentName
 *         ProductPrize:
 *           type: string
 *           description: DepartmentName
 *         Productlocation:
 *           type: string
 *           description: Productlocation
 *         ProductImage:
 *           type: string
 *           description: ProductImage
 *         ProductCondition:
 *           type: string
 *           description: ProductCondition
 *         BuyingFormat :
 *           type: string
 *           description: BuyingFormat
 *         ShowOnly :
 *           type: string
 *           description: ShowOnly
 *       example:
 *         DepartmentId: AutoGenerated
 *         ProductName: Depat012
 *         ProductDescription: ANBC
 *         ProductPrize: ANBC
 *         ProductSize: ANBC
 *         ProductImage: ANBC
 *         ProductCondition: ANBC
 *         BuyingFormat: ANBC
 *         Productlocation: Delhi
 *         ShowOnly: Delhi
 *        
 *
 */

/**
 * @swagger
 * /api/v1/GetAllProductDetails:
 *   get:
 *     summary: get all product
 *     tags: [product]
 *     responses:
 *       200:
 *         description: get All product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/product'
 */
router.route("/GetAllProductDetails").get(GetAllProductDetails)


/**
 * @swagger
 * /api/v1/createProductDetails:
 *   post:
 *     summary: create a new product
 *     tags: [product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product'
 *     responses:
 *       200:
 *         description: product create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       500:
 *         description: Some server error
 */
 router.route("/createProductDetails").post(createProductDetails)

/**
 * @swagger
 * /api/v1/DeleteProductDetails/{ProductId}:
 *   delete:
 *     summary: Delete an product
 *     tags: [product]
 *     parameters:
 *         - in: path
 *           name: ProductId
 *           required: true
 *           description: ProductId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: product delete successfully
 *   
 */
 router.route("/DeleteProductDetails/:ProductId").delete(DeleteProductDetails)

module.exports = router

