const express = require("express");
const upload = require("../middleware/multer");
const {
  addProduct,
  getProductById,
  updateProduct,
} = require("../controller/productController");

const router = express.Router();

router.post("/", upload.single("image"), addProduct);
router.get("/:id", getProductById);
router.put("/:id", upload.single("image"), updateProduct);

module.exports = router;
