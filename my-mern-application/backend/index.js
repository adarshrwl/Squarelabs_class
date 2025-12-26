const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("Status Okay!!");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const authroutes = require("./routes/authroutes");
const productroutes = require("./routes/productRoutes");
app.use("/auth", authroutes);
app.use("/addProduct", productroutes);
app.use("/getProductById", productroutes);
app.use("/updateProduct", productroutes);
//login api-localhost:5000/auth/login
//register api-localhost:5000/auth/register
//add Product api-localhost:5000/addProduct/
//getProductByID -localhost:5000/getProductById/ID

// 2 branches- main/master -testing

// merging with master
//git checkout master
// git pull origin master
//git merge testing(branch -name)
// git push origin master
