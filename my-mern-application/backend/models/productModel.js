const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sales: {
      type: String,
      default: 0,
    },
    //reviews
    //categories
    //avg ratings
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
