const express = require("express")
const {getProductbyPriceRange} = require("../controller/filter_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         Email: admin@gmail.com
 *         Password: 12345
 *        
 *
 */

/**
 * @swagger
 * /api/v1/admin/getAdmin:
 *   get:
 *     summary: get all admin
 *     tags: [admin]
 *     responses:
 *       200:
 *         description: get All admin
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/admin'
 */
router.route("/getProductbyPriceRange").get(getProductbyPriceRange)


module.exports = router

