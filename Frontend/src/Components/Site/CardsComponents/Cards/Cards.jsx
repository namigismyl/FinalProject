import React, {  useContext } from "react";
import Card from "../Card/Card";
import { Link} from "react-router-dom";
import GTA6 from "../../../../assets/img/GTA6.png";
import GTA6_Big from "../../../../assets/img/GTA6_Big.png";
import "./Cards.css";
import MainContext from "../../../../Context/Context";
const Cards = () => {
  const {modal,clickModal}=useContext(MainContext)
  return (
    <>
    <div className="custom-container featuredG__container">
      <div className="row">
        <div className="col-12">
          <div className="featured__games__title">
            <h3>
              <Link to="">Featured Games</Link>
            </h3>
          </div>
            <div className="featured__games__gta6">
              <button className="featuredGames__btn" onClick={clickModal}>
              <img src={GTA6} alt="" className="gta6__img" />
              <img src={GTA6_Big} alt="" className="gta6__bigImg" />
              </button>
            </div>
        </div>
      </div>
      <div className="row gameRow">
        <Card />
      </div>
      
    </div>
    {modal ? (
                <div className="modal" onClick={clickModal}>
                    <div className="modal-content">
                    <iframe  src="https://www.youtube.com/embed/QdBZY2fkU-0?si=hnK-4W6KwyTP274f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                    </div>
                </div>
            ) : null}
    </>
  );
};

export default Cards;
