const express = require("express")
const {getProductbyPriceRange,getProductbyProductCondition,getProductbyBuyingFormat,getProductbyProductlocation,getProductbyShowOnly} = require("../controller/filter_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Filter:
 *       type: object
 *       required:
 *         - Price1
 *         - Price2
 *       properties:
 *         Price1:
 *           type: integer
 *           description: Price1
 *         Price2:
 *           type: integer
 *           description: Price2
 *       example:
 *         Price1: lessThanOnePrice
 *         Price2: greaterThanOnePrice
 *        
 *
 */

/**
 * @swagger
 * /api/v1/getProductbyPriceRange:
 *   post:
 *     summary: get Product by PriceRange
 *     tags: [Filter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/priceRange'
 *     responses:
 *       200:
 *         description: get Product by PriceRange successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/priceRange'
 *       500:
 *         description: Some server error
 */
router.route("/getProductbyPriceRange").post(getProductbyPriceRange)

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductCondition:
 *       type: object
 *       required:
 *         - ProductCondition
 *       properties:
 *         ProductCondition:
 *           type: string
 *           description: ProductCondition
 *       example:
 *         ProductCondition: New
 *        
 *
 */
/**
 * @swagger
 * /api/v1/getProductbyProductCondition:
 *   post:
 *     summary: get Product by Product Condition
 *     tags: [Filter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductCondition'
 *     responses:
 *       200:
 *         description: get Product by ProductCondition successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductCondition'
 *       500:
 *         description: Some server error
 */
 router.route("/getProductbyProductCondition").post(getProductbyProductCondition)

 /**
 * @swagger
 * components:
 *   schemas:
 *     BuyingFormat:
 *       type: object
 *       required:
 *         - BuyingFormat
 *       properties:
 *         BuyingFormat:
 *           type: string
 *           description: BuyingFormat
 *       example:
 *         BuyingFormat: AcceptsOffer
 *        
 *
 */
/**
 * @swagger
 * /api/v1/getProductbyBuyingFormat:
 *   post:
 *     summary: get Product by Buying Format
 *     tags: [Filter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BuyingFormat'
 *     responses:
 *       200:
 *         description: get Product by BuyingFormat successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BuyingFormat'
 *       500:
 *         description: Some server error
 */
 router.route("/getProductbyBuyingFormat").post(getProductbyBuyingFormat)
 /**
 * @swagger
 * components:
 *   schemas:
 *     Productlocation:
 *       type: object
 *       required:
 *         - Productlocation
 *       properties:
 *         Productlocation:
 *           type: string
 *           description: Productlocation
 *       example:
 *         Productlocation: Delhi
 *        
 *
 */
/**
 * @swagger
 * /api/v1/getProductbyProductlocation:
 *   post:
 *     summary: get Product by Product location
 *     tags: [Filter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Productlocation'
 *     responses:
 *       200:
 *         description: get Product by Productlocation successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Productlocation'
 *       500:
 *         description: Some server error
 */
 router.route("/getProductbyProductlocation").post(getProductbyProductlocation)
 /**
 * @swagger
 * components:
 *   schemas:
 *     ShowOnly:
 *       type: object
 *       required:
 *         - ShowOnly
 *       properties:
 *         ShowOnly:
 *           type: string
 *           description: ShowOnly
 *       example:
 *         ShowOnly: ReturnAccepted
 *        
 *
 */
/**
 * @swagger
 * /api/v1/getProductbyShowOnly:
 *   post:
 *     summary: get Product by ShowOnly
 *     tags: [Filter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShowOnly'
 *     responses:
 *       200:
 *         description: get Product by ShowOnly successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShowOnly'
 *       500:
 *         description: Some server error
 */
 router.route("/getProductbyShowOnly").post(getProductbyShowOnly)
module.exports = router

