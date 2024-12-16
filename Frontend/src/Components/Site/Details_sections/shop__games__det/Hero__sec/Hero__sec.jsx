import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addToBasket } from "../../../../../Services/Redux/Slices/basketSlice";
const Hero__sec = ({ item }) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const dispatch= useDispatch()
  return (
    <div className="shop__games__heroSec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="heroSec__text">
              <img src={item.nameImg} />
              <p>{item.title}</p>
              <p>Price: €{item.price}</p>
              {userLocal.id ? (
                <button
                  className="shop__basketBtn games__basketBtn"
                  onClick={() => dispatch(addToBasket(item))}
                >
                  ADD TO CART
                </button>
              ) : (
                <Link to="/register">
                  <button
                    className="shop__basketBtn games__basketBtn"
                    
                  >
                    ADD TO CART
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-8">
            <div
              className="heroSec__img"
              style={{ backgroundImage: `url(${item.bigImg})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero__sec;
