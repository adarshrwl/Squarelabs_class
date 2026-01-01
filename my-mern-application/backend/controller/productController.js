const Product = require("../models/productModel");
const fs = require("fs");
const path = require("path");
const addProduct = async (req, res) => {
  try {
    // Destructure from req.body
    let { productName, description, price, sales } = req.body;

    // Trim strings to remove spaces
    productName = productName?.trim();
    description = description?.trim();
    price = price?.trim();
    sales = sales?.trim();
    // "" =json -false formdata -true

    // Validate required fields
    if (!productName || !description || !price || !sales) {
      return res.status(400).json({ msg: "All information is required!" });
    }

    // Validate numbers
    const priceNum = Number(price);
    const salesNum = Number(sales);

    if (isNaN(priceNum) || isNaN(salesNum)) {
      return res
        .status(400)
        .json({ msg: "Price and Sales must be valid numbers!" });
    }

    // Validate image
    if (!req.file) {
      return res.status(400).json({ msg: "Image is required!" });
    }
    const image = `/uploads/${req.file.filename}`;

    // Create new product
    const newProduct = new Product({
      productName,
      description,
      price: priceNum,
      sales: salesNum,
      image,
    });

    const savedProduct = await newProduct.save();

    // Send response
    res.status(201).json({ msg: "Product saved!", product: savedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
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
        msg: "Product Not found",
      });
    }
    //return status
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching Products", error: error.msg });
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    // req=new data
    //product=old data
    const product = await Product.findById(req.params.id);
    //product=all data
    if (!product)
      return res.status(400).json({ messsage: "Product Not Found!!" });
    //api-localhost:5000/update/id
    // body
    // body data
    const { productName, description, price, sales } = req.body;
    let image = product.image;

    if (req.file) {
      //new image check
      if (product.image) {
        //old image check
        const imagePath = path.join(
          __dirname,
          "..",
          product.image.replace(/^\/+/, "")
          // /->\
          // new link-\uploads\imagename
        );
        // /uploads/imagename

        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      image = `uploads/${req.file.filename}`;
    }

    product.productName = productName || product.productName;
    product.description = description || product.description;
    product.price = price || product.price;
    product.sales = sales || product.sales;

    product.image = image;

    const updatedProduct = await product.save();
    res.status(200).json({
      msg: "Product Updated Sucessfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error Updating Products", error: error.msg });
  }
};

const getProudcts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({ msg: "No products found" });
    }

    return res.status(200).json({
      msg: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Error fetching products", error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  //product find by id
  //if (!product)
  //exits or not ?
  //deletion of the image
  //await product.deleteOne(id)
  //status
  //catch
};

module.exports = {
  addProduct,
  getProductById,
  updateProduct,
  getProudcts,
};
