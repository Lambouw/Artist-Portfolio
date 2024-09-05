import React from "react";
import { Item } from "react-photoswipe-gallery";

import "../../dist/pictureitem.css";

const PictureItem = ({ item, image }) => {
  return (
    <div className="pictureitem--container">
      <Item
        original={image}
        thumbnail={image}
        width={item.width}
        height={item.height}
      >
        {({ ref, open }) => (
          <span className="pictureitem--container--item">
            <img
              className="pictureitem--container--item--img"
              loading="lazy"
              ref={ref}
              onClick={open}
              src={image}
              alt={item.name}
            ></img>
            <div className="pictureitem--container--item--description">
              <p className="pictureitem--container--item--description--title">
                {item.name}
              </p>
              <p className="pictureitem--container--item--description--dimensions">
                {item.dimensions}
              </p>
            </div>
          </span>
        )}
      </Item>
    </div>
  );
};

export default PictureItem;
