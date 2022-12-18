const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controlar/productsControlar");
const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
