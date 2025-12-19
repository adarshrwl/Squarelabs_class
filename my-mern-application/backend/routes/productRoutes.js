const express = require("express");
const upload = require("../middleware/multer");
const {
  addProduct,
  getProductById,
} = require("../controller/productController");

const router = express.Router();

router.post("/", upload.single("image"), addProduct);
router.get("/:id", getProductById);

module.exports = router;
