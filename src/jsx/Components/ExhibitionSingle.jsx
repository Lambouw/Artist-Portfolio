import React, { useEffect, useRef } from "react";

import "../../styles/css/exhibitionsingle.css";

const ExhibitionSingle = ({ exhibition }) => {
  const exhibitionSingleRef = useRef();

  useEffect(() => {
    exhibitionSingleRef.current.classList.add("slide-in-exhibition-single");
  }, []);

  return (
    <div className="exhibitionsingle--container" ref={exhibitionSingleRef}>
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
