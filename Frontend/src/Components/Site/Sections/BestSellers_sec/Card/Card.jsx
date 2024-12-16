import React from "react";
import { Link } from "react-router-dom";
const Card = ({product}) => {
  return (
   <>
    <div className="col-3">
      <Link to={`/shop/products/details/${product._id}`}>
        <div class="card" style={{ width: "100%"}}>
          <img src={product.image} class="card-img-top" alt="..." />
          <div class="card-body" style={{ padding: "20px" }}>
            <h3 class="card-title">
              {product.title}
            </h3>
            <p class="card-text">€{product.price}</p>
          </div>
        </div>
      </Link>
    </div>
    
   </>
  );
};

export default Card;
