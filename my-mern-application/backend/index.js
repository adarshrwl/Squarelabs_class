const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Status Okay!!");
});

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const authroutes = require("./routes/authroutes");
app.use("/auth", authroutes);
//login api-localhost:5000/auth/login
//register api-localhost:5000/auth/register
