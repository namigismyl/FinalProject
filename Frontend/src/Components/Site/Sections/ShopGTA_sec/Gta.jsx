import React from "react";
import "./Gta.css";
import Cards from "./Cards/Cards";
const Gta = ({products}) => {
  return (
    <section className="Gta__shop">
      <div className="custom-container gta-container">
        <div className="row" style={{ margin: "0 auto" }}>
        <div className="col-12">
                <div className="shop__card__title">
                <h2>Grand Theft Auto</h2>
                </div>
            </div>
        </div>
        <Cards products={products}/>
      </div>
    </section>
  );
};

export default Gta;
