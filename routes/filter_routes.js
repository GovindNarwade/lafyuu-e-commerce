const express = require("express")
const {getProductbyPriceRange,getProductbyProductCondition} = require("../controller/filter_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     priceRange:
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
 *     tags: [priceRange]
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
 *     tags: [priceRange]
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

module.exports = router

