import React from "react";
import { Link } from "react-router-dom";
import GTA5 from '../../../../assets/img/GTA5.png'
import GTAOnline from '../../../../assets/img/GTAOnline.png'
import RDR2 from '../../../../assets/img/reddeadredemption2.png'
import RDOnline from '../../../../assets/img/reddeadonline.png'
import './Card.css'
const Card = () => {
  return (
    <>
      <div className="col-3 gameCol">
        <Link>
        <div className="featured__games__game">
        <img src={GTA5} class="card-img-top" alt="..." />
        </div>
        </Link>
      </div>
      <div className="col-3 gameCol">
        <Link>
        <div className="featured__games__game">
        <img src={GTAOnline} class="card-img-top" alt="..." />
        </div>
        </Link>
      </div>
      <div className="col-3 gameCol">
        <Link to={"/reddeadredemption2"}>
        <div className="featured__games__game rdr2">
        <img src={RDR2} class="card-img-top" alt="..." />
        </div>
        </Link>
      </div>
      <div className="col-3 gameCol">
        <Link>
        <div className="featured__games__game rdro">
        <img src={RDOnline} class="card-img-top" alt="..." />
        </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
