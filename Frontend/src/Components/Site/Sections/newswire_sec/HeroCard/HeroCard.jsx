import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ newsitem, getDetailPath }) => {
  const detailPath = getDetailPath(newsitem.category, newsitem._id);

  return (
    <div className="row heroSec__row newswire__herosec__row">
      <div className="col-9 heroSec__col1 newswire__herosec__col1">
        <Link to={detailPath}>
          <img src={newsitem.image} alt={newsitem.title} />
        </Link>
      </div>

      <div className="col-3 heroSec__col2 newswire__herosec__col2">
        <Link to={detailPath}>
          <div className="heroSec__info newswire__herosec__info">
            <div className="heroSec__title newswire__herosec__title">
              <p style={{ display: "inline-block", paddingRight: "15px" }}>
                {newsitem.category}
              </p>
              <time className="newswire__herosec__title__time">
                {newsitem.time}
              </time>
              <h2>{newsitem.title}</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
