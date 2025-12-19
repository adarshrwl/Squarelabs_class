const Product = require("../models/productModel");
const fs = require("fs");
const path = require("path");

const addProduct = async (req, res) => {
  //desctructure
  const { productName, description, price, sales } = req.body;
  console.log(req.body);
  console.log(productName, description, price, sales);

  //working with image
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  //true or false
  //if else
  //   let exeimage = null;
  //   if (req.file) {
  //     exeimage = `/uploads/${req.file.filename}`;
  //   } else {
  //     exeimage = null;
  //   }

  //data check
  if (!productName || !description || !price || !sales) {
    return res.status(400).json({ message: "All Information are required!!" });
  }
  if (!image) {
    return res.status(400).json({ message: " Image is  required!!" });
  }
  //new product
  const newProduct = new Product({
    productName,
    description,
    price,
    sales,
    image,
  });
  const saveProduct = await newProduct.save();
  res.status(201).json({ message: "Product saved!", saveProduct });
  //save
  //response
};

//frontend gives id of product
const getProductById = async (req, res) => {
  //find product by id
  console.log(req.body);

  try {
    const product = await Product.findById(req.params.id);
    //check if product exists or not?
    if (!product) {
      return res.status(404).json({
        message: "Product Not found",
      });
    }
    //return status
    return res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Products", error: error.message });
  }
};

module.exports = {
  addProduct,
  getProductById,
};
