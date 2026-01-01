import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../common/Cards/ProductCard";

const Products = () => {
  //usestate of products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProducts")
      .then((res) => {
        setProducts(res.data.products);
        //products haru aaayera json form ma base ko xa
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {/* products[1] [products[2]] product[3] */}
        {products.map((p) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
