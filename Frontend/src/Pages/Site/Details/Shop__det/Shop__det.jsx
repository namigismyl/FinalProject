import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Shop__det.css";
import track__svg from "../../../../assets/img/track.svg";
import FAQ from "../../../../Components/Site/Details_sections/FAQ/FAQ";
import "../../Shop/Shop.css"
import { useParams } from "react-router";
import axios from "axios"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../../Services/Redux/Slices/basketSlice";
const Shop__det = () => {
  const [item,setItem]=useState({})
  const dispatch=useDispatch()
  useEffect(() => {
    $(document).ready(function () {
      $(".slider").slick({
        prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
        nextArrow:  '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
        
      });
    });
  }, []);
  const {id} = useParams()
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`).then(res=>{
      setItem(res.data)
    })
  },[id])
  return (
    <div id="shop__details">
      <div className="shop__details__slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="layout">
                <ul className="slider">
                  <li>
                    <img src={item.image} alt="Image 42" />
                  </li>
                  <li>
                    <img src={item.detImg} alt="Image 43" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="rockstar__games__text">
                <h1>{item.title}</h1>
                <p className="rockstar__games__text__des">
                  {item.description}
                </p>
                <p className="rockstar__games__text__price">€{item.price}</p>
                {
                  userLocal.id?(
                    <button className="shop__basketBtn" onClick={()=>dispatch(addToBasket(item))}>ADD TO CART</button>
                  ):(
                    <Link to="/register">
                    <button className="shop__basketBtn">ADD TO CART</button>
                    </Link>
                  )
                }
                <div className="details__info">
                  <img src={track__svg} alt="Track SVG" />
                  <span>Get FREE shipping with orders over €69.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="faq__details">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="faq__title">
                <h2>FAQ</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop__det;
