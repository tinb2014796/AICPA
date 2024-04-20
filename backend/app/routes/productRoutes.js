const express = require("express");
const product = require("../controllers/productController.js");


const router = express.Router();
router.route("/view")
    .get(product.findAll)

router.route("/:id")
    .get(product.findOne)
    .put(product.updateProduct)
router.route("/:type")
    .get(product.findOne)

router.route("/add")
    .post(product.create)

router.route("/:name")
  
    .delete(product.delete)

module.exports = router;
