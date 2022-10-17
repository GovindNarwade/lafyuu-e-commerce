const express = require("express")
const {createshippingDetails,GetAllshippingDetails,deleteShippingDetails,updateshippingDetails} = require("../controller/shipping_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     shipping:
 *       type: object
 *       required:
 *         - ShippingId
 *         - ShippingDate
 *         - ShippingType
 *         - ProductId
 *         - Address
 *       properties:
 *         ShippingId:
 *           type: integer
 *           description: ShippingId
 *         ShippingDate:
 *           type: string
 *           description: password
 *         ShippingType :
 *           type: string
 *           description: ShippingType
 *         ProductId :
 *           type: integer
 *           description: ProductId
 *         Address :
 *           type: string
 *           description: Address
 *       example:
 *         ShippingId: Autogenerated
 *         ShippingDate: 12-11-2022
 *         ShippingType: xyz
 *         ProductId: xyz
 *         Address: ABC
 *        
 *
 */

/**
 * @swagger
 * /api/v1/GetAllshippingDetails:
 *   get:
 *     summary: get all shipping Details
 *     tags: [shipping]
 *     responses:
 *       200:
 *         description: get All shipping
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/shipping'
 */
router.route("/GetAllshippingDetails").get(GetAllshippingDetails)
/**
 * @swagger
 * /api/v1/createshippingDetails:
 *   post:
 *     summary: create a new shipping Details
 *     tags: [shipping]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/shipping'
 *     responses:
 *       200:
 *         description: shipping details create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/shipping'
 *       500:
 *         description: Some server error
 */
 router.route("/createshippingDetails").post(createshippingDetails)
/**
 * @swagger
 * /api/v1/updateshippingDetails:
 *   post:
 *     summary: update shipping Details
 *     tags: [shipping]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/shipping'
 *     responses:
 *       200:
 *         description: shipping update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/shipping'
 *       500:
 *         description: Some server error
 */
 router.route("/updateshippingDetails").put(updateshippingDetails)
 /**
  * @swagger
  * /api/v1/deleteShippingDetails/{ShippingId}:
  *   delete:
  *     summary: Delete an shipping
  *     tags: [shipping]
  *     parameters:
  *         - in: path
  *           name: ShippingId
  *           required: true
  *           description: ShippingId is required
  *           schema:
  *              type: string
  *     responses:
  *       200:
  *         description: shipping delete successfully
  *   
  */
  router.route("/deleteShippingDetails/:ShippingId").delete(deleteShippingDetails)
 
module.exports = router
