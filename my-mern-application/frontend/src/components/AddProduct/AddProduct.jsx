import React, { useState } from "react";

export const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [sales, setSales] = useState("");
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("sales", sales);
    try {
      const res = await fetch("http://localhost:5000/addProduct", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Product Added:", data);
      alert(data);

      //form empty parna parne hunxa
      setProductName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setSales("");
    } catch (e) {
      console.error(e);
      alert("Upload Failed!!");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify- -center">
          <div className="col-md-8">
            <div className="card shadow p-4 mt-5">
              <h4 className="text-center mb-4">Add Product</h4>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="image" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setImage(file);

                      console.log(file);
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="sales" className="form-label">
                    Sales
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="sales"
                    value={sales}
                    onChange={(e) => setSales(e.target.value)}
                  />
                </div>
                {preview && (
                  <div className="mt-3">
                    <img src={preview} alt="Preview" />
                  </div>
                )}

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success w-100 fw-bold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
