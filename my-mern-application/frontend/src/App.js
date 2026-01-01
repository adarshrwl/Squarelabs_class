import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./common/Navbar/Navbar";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { AddProduct } from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
