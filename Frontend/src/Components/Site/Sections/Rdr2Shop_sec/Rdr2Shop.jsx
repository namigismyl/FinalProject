import React from "react";
import "./Rdr2shop.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Rdr2Shop = ({ products }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    initialSlide: 0,

  };
  return (
    <section className="RDR2__shop">
      <div className="custom-container">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="col-6">
            <h2>Red Dead Redemption Essentials</h2>
          </div>
          <div className="col-6 seeAllCol">
                <Link to="/shop/products/category/RDRE">See all <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
          
        <div className="row" >
              <Slider {...settings}>
              {products.filter(item=>item.category === "RDRE").map((product, index) => {
                return (
                  <div className="col-3"  key={index}>
                  <Link to={`/shop/products/details/${product._id}`}>
                    <div class="card" style={{ width: "16.2rem", }}>
                      <img src={product.image} class="card-img-top" alt="..." />
                      <div class="card-body" style={{ padding: "20px",height:"80px"}}>
                        <h3 class="card-title">{product.title}</h3>
                      </div>
                    </div>
                  </Link>
    
                  </div>
                );
              })}
            </Slider>
        </div>
      </div>
    </section>
  );
};

export default Rdr2Shop;
