import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card shadow-sm d-flex flex-column p-2"
      style={{ width: "220px", borderRadius: "14px" }}
    >
      <div className="text-center">
        <img
          src={`http://localhost:5000${product.image}`} // products.image-/uploads/imagename1/
          alt={product.productName}
          className="rounded object-fit-cover"
          style={{ width: "100%", height: "130px" }}
        />
      </div>
      <h6 className="fw-semibold mt-2 mb-1 text-truncate">
        {product.productName}
      </h6>
      <p className="text-muted small mb-2 text-truncate">
        {product.description}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <span className="fw-bold text-success">Nrs.{product.price}</span>
        <span className="badge bg-primary small">Sales {product.sales}</span>
      </div>
      <button type="button">Details</button>
      {/* {product._id} */}
    </div>
  );
};
//   return (
//     <>
//       <div>
//         <p>{product.productName}</p>
//         <> {product.description}</>
//         <p>{`$ ${product.price}`}</p>
//       </div>
//     </>
//   );
// };

export default ProductCard;
