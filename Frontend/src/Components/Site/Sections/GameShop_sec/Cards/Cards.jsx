import React from "react";
import { Link } from "react-router-dom";
const Cards = ({game}) => {
  return (
      <div className="col-3">
        <Link to={`/shop/games/details/${game._id}`}>
          <div class="card" style={{ width: "20rem" }}>
            <img src={game.image} class="card-img-top" alt="..." />
            <div class="card-body games__body">
              <h3 class="card-title">{game.title}</h3>
              <p class="card-text">
              €{game.price}
              </p>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default Cards;
