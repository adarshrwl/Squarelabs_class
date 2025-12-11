const login = (req, res) => {
  console.log(req.body);
  res.send("Loginn");
};

const register = (req, res) => {
  res.send("Register!!");
};

module.exports = { login, register };
