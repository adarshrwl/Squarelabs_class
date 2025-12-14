const bcrypt = require("bcryptjs");
const User = require("../models/registerModel");

const login = (req, res) => {
  console.log(req.body);
  res.send("Loginn");
};

const register = async (req, res) => {
  //data recieve
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
  const hashedPassword = await bcrypt.hash(password, salt);
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
    message: "User Sucessfully created",
  });
  //error check
};

module.exports = { login, register };
