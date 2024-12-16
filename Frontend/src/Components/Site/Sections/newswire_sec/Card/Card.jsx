import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../../../Context/Context";

const Card = ({ newsCard }) => {
  const { getDetailPath } = useContext(MainContext);

  if (!newsCard) return null;

  const detailPath = getDetailPath(newsCard.category, newsCard._id);

  return (
    <div className="col-md-6 col-sm-12 col-lg-4 newswireCol">
      <Link to={detailPath}>
        <div className="card" style={{ width: "100%" }}>
          <img
            src={newsCard.image}
            className="card-img-top"
            alt={newsCard.title}
          />
          <div className="card-body newswire-body">
            <h5
              className="card-title"
              style={{
                display: "inline-block",
                paddingRight: "15px",
                fontSize: "15px",
                color: "#e8e8e8",
              }}
            >
              {newsCard.category}
            </h5>
            <time
              datetime="June 13,2024"
              style={{
                color: "#e8e8e8",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: 1.6,
                opacity: ".65",
              }}
            >
              {newsCard.time}
            </time>
            <p
              className="card-text"
              style={{
                fontSize: "25px",
                lineHeight: "1.3",
                fontWeight: "bolder",
                marginTop:"10px"
              }}
            >
              {newsCard.title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
