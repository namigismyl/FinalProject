import React, { useContext } from "react";
import Card from "../Card/Card";
import MainContext from "../../../../../Context/Context";

const Cards = () => {
  const {filteredNews}=useContext(MainContext)
  if (!Array.isArray(filteredNews)) {
    return (
      <div style={{ color: "#e8e8e8", fontSize: "30px" }}>
        No news available
      </div>
    );
  }

  return (
    <div className="row">
      {filteredNews.map((newsCard, index) => {
        return <Card key={index} newsCard={newsCard} />;
      })}
    </div>
  );
};

export default Cards;
