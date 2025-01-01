import React from "react";
import "./Additional_Sec.css";
const Additional_Sec = ({ item }) => {
  return (
    <div className="additional__section">
      <div className="custom-container additional__section__container">
        <div className="row">
          <div className="col-12">
            <div className="additional__section__img">
              <img src={item.images?.length<=3 ? item.images?.[1]  :item.images?.[2]} alt="" />
            </div>
          </div>
          <div className="row generalRow">
            <div className="col-6">
              <div className="additional__section__text">
                <h3>{item.detailSecTitle}</h3>
                <p className="details__des">{item.detailSecDes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="additional__section__img">
              <img src={item.images?.length<=3 ? item.images?.[2]  :item.images?.[3]} alt="" />
            </div>
          </div>
          <div className="row generalRow">
            <div className="col-6">
              <div className="additional__section__text">
                <h3>{item.detailRdTitle}</h3>
                <p className="details__des__end">{item.detailRdDes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional_Sec;
