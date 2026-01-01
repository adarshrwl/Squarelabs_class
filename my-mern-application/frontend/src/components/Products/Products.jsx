import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../common/Cards/ProductCard";

const Products = () => {
  //usestate of products
  const [products, setProducts] = useState([]);

  // Notes
  // backend working
  // async await=api call database time lange
  // async await use hudaina -use effect can be used!!
  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:5000/getProducts")
      .then((res) => {
        setProducts(res.data.products);
        //products haru aaayera json form ma base ko xa
      })
      .catch((err) => console.error(err));
  }, []);
  // p1
  // {
  // id
  //   product1;
  // }
  // p2
  // {
  // id
  //   product2;
  // }
  // p3
  // {
  // id
  //   product3;
  // }
  //frontend rendering !!!

  /*
  //example
  product =[1,2,3,4,5,]
  product.map((p)={{console.log(product.id)}})
  1st turn
  1st element=1
  output 1,=product cardP{json data}//task sakyo
  2
  3
  4
  5



  
  */

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
