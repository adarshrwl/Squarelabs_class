const express = require("express");
const addProduct = require("../controller/productController");

const router = express.Router();

router.post("/", addProduct);

module.exports = router;
