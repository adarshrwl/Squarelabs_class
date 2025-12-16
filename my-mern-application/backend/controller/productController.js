const Product = require("../models/productModel");
const fs = require("fs");
const path = require("path");

const addProduct = async (req, res) => {
  console.log(req.body);
  //desctructure
  const { productName, description, price, sales } = req.body;

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

module.exports = addProduct;
