const bcrypt = require("bcryptjs");
const User = require("../models/registerModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//controller
//valid check
//token generation
//frontend sending

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//_id=unique
//email=unique
//token -unique
const login = async (req, res) => {
  console.log(req.body);

  // Destructure email and password
  const { email, password } = req.body;
  // Check if fields are provided
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }
  // Find user by email
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid email or password" });
  }
  // Compare password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid email or password" });
  }

  const token = generateToken(user);
  // Success response
  res.status(200).json({
    msg: "Logged in Successfully",
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: "admin",
    },
  });
};

const register = async (req, res) => {
  //data recieve
  // checking data
  const { username, email, password, phoneNumber } = req.body;
  //data empty or not ?
  if (!username || !email || !password || !phoneNumber) {
    return res.status(400).json({ msg: "All Fields are required" });
  }
  //email -already registered or not ?
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "User Already Exists!!!" });
  }
  //hashing encryption
  const salt = await bcrypt.genSalt(10);
  //gen salt
  // 1 -14+
  //
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  console.log(hashedPassword.length);
  console.log(password);
  console.log(password.length);
  //new user
  newUser = new User({
    username,
    email,
    password: hashedPassword,
    phoneNumber,
  });
  //save user
  await newUser.save();
  //response send
  res.status(201).json({
    msg: "User Sucessfully created",
  });
  //error check

  //data recieve
  //destructure
};

module.exports = { login, register };
