import React, { useEffect } from "react";
import BasketTable from "../../../Components/Site/BasketTable/BasketTable";
import "./Basket.css";
import { useNavigate } from "react-router";
import {useSelector} from "react-redux"
const Basket = () => {
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userLocal.id) {
      navigate("/register");
    }
  }, [userLocal, navigate]);
  const { basketItems } = useSelector(state=>state.basketItems);
  return (
    <div className="basket">
      <BasketTable basketItems={basketItems} />
    </div>
  );
};

export default Basket;
