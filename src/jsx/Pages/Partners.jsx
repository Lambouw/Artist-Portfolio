import React, { useEffect, useRef } from "react";

import PartnerItem from "../Components/PartnerItem";

import "../../styles/css/partners.css";

import PartnersData from "../../assets/data/partners.json";

const Partners = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    titleRef.current.classList.add("slide-in-partners-title");
    contentRef.current.classList.add("slide-in-partners-content");
  }, []);

  return (
    <div className="partners">
      <h1 className="partners--title" ref={titleRef}>
        Partner
      </h1>
      <div className="partners--content" ref={contentRef}>
        {PartnersData.map((element) => (
          <PartnerItem partner={element} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
