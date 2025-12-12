const login = (req, res) => {
  console.log(req.body);
  res.send("Loginn");
};

const register = (req, res) => {
  //data recieve
  const { name, email, age } = req.body;
  //data empty or not ?
  if (!name || !email || !age) {
    return res.status(400).json({ msg: "All Fields are required" });
  }
  //email -already registered or not ?

  //hashing encryption
  
  //new user
  //save user
  //response send
  //error check
  res.send("Register!!");
};

module.exports = { login, register };
