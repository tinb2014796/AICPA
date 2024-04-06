const express = require("express");
const product = require("../controllers/productController.js");


const router = express.Router();

router.route("/")
    .get(product.findAll)
    .post(product.create)

router.route("/:id")
    .put(product.updateProduct)
    .delete(product.delete)

module.exports = router;
