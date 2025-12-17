const express = require("express");
const upload=require('../middleware/multer')
const addProduct = require("../controller/productController");

const router = express.Router();

router.post("/", upload.single("image"), addProduct);

module.exports = router;
 