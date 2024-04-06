const express = require("express");
const Cart = require("../controllers/cartController");


const router = express.Router();

router.route("/")
    .get(Cart.findAll)
    .post(Cart.create)

router.route("/:id")
    .put(Cart.updateCart)
    .delete(Cart.delete)

module.exports = router;