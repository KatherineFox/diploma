import React from "react";
import products from "../data/Products";

const SingleProduct = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <div className="productBlock">
        <img src={product.image} act={product.name} />
        <div className="productName">{product.name}</div>
        <span className="productDescription">{product.description}</span>
        <span className="productPrice">${product.price}</span>
        <h6>Status</h6>
        {product.countInStock > 0 ? (
          <span>In Stock</span>
        ) : (
          <span>unavailable</span>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
