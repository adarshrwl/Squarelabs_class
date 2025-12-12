const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, //must provide name
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      default: 18,
    },
    createdAt: {
      type: Date,
      default: Data.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


//username email password username phonenumber