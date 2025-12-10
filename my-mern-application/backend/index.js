const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Status Okay!!");
});

app.listen(5000, () => {
  console.log("Server is running");
});

const authroutes = require("./routes/authroutes");
app.use("/auth", authroutes);
//login api-localhost:5000/auth/login
