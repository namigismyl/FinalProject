import React, { useContext } from "react";
import MainContext from '../../../Context/Context';
import Card from '../../../Components/Site/Sections/newswire_sec/Card/Card';
import "./newsCategory.css"
const Gta5Online__category = () => {
    const { news } = useContext(MainContext);
    return (
      <div className="gta5Online__category">
        <div className="custom-container">
          <div className="row">
            {news
              .filter((card) => card.category === "Gta Online")
              .slice(1).map((newsCard, index) => {
                return <Card newsCard={newsCard} key={index} />;
              })}
          </div>
          <div className="row">
            <div className="viewMore__button morestories__btn">
                <button>More Stories</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Gta5Online__category
