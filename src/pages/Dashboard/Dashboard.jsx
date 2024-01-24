import React, { useState } from "react";
import ProductForm from "../../components/Dashboard/ProductForm/ProductForm";
import ProductGrid from "../../components/Dashboard/ProductGrid/ProductGrid";
const Dashboard = () => {
  const [product, setProduct] = useState({
    name: "",
    Description: "",
    active: false,
    stock: 0,
    price: 0,
    old_price: 0,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name !== "active" ? e.target.value : e.target.checked,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    // TODO: Validation needed
    // TODO: API for saving new product
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Product</h5>
          <ProductForm />
          <div className="card flex justify-content-center"></div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Products</h5>
          <ProductGrid columns={null} data={null} />
          <div className="card flex justify-content-center"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
