import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import Card from '../../../Components/Site/Sections/newswire_sec/Card/Card';
import "./newsCategory.css"
const RDROnline__category = () => {
  const { news } = useContext(MainContext);

  return (
    <div>
      <div className="rdrOnline__category">
        <div className="custom-container">
          <div className="row">
            {news
              .filter((card) => card.category === "Red Dead Online")
              .map((newsCard, index) => {
                return <Card newsCard={newsCard} key={index} />;
              })}
          </div>
          <div className="row">
            <div className="col-12">
                <div className="viewMore__button morestories__btn">
                    <button>More Stories</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDROnline__category;
