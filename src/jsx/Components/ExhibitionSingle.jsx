import React from "react";

import "../../styles/css/exhibitionsingle.css";

const ExhibitionSingle = ({ exhibition }) => {
  console.log("exhibition: " + exhibition);

  return (
    <div className="exhibitionsingle--container">
      <div className="exhibitionsingle--container--date">
        {exhibition.month}
      </div>
      <div className="exhibitionsingle--container--wrapper">
        <div className="exhibitionsingle--container--wrapper--name">
          {exhibition.name}
        </div>
        <div className="exhibitionsingle--container--wrapper--location">
          {exhibition.location}
        </div>
        <div className="exhibitionsingle--container--wrapper--image"></div>
      </div>
    </div>
  );
};

export default ExhibitionSingle;
