import React, { useState } from "react";
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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">New Product</h5>
        <form onSubmit={submitProduct}>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Enter Description"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              className="form-control "
              name="stock"
              placeholder="Enter stock"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control "
              name="price"
              placeholder="Enter price"
              min={0}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Old Price</label>
            <input
              type="number"
              className="form-control "
              name="old_price"
              placeholder="Enter old price"
              min={0}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" name="active" onChange={handleChange} />
              <label htmlFor="active">Active</label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
