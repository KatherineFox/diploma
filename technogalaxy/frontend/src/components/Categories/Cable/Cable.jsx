import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import CableProducts from "../../../data/CableProducts";
import axios from "axios";

const Cable = ({ posts }) => {
  const [Cable_Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/cable_products");
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
    <div>
      <div className="shopContainer">
        <div className="shopSection">
          <div className="shopRow">
            <div className="itemContainer row ">
              {CableProducts.map((product) => (
                <div className="items col-lg-3 offset-lg-1" key={product._id}>
                  <div className="item">
                    <Link to={`/categories/cables/${product._id}`}>
                      <div className="itemImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </Link>
                    <div className="itemText">
                      <Link to={`/categories/cables/${product._id}`}>
                        {product.name}
                      </Link>
                    </div>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                    <h7>${product.price}</h7>
                    <button className="btn btn-primary">Buy</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cable;
