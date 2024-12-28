import { useEffect, useState } from "react";

import { Item } from "react-photoswipe-gallery";

import "../../styles/css/pictureitem.css";

const PictureItem = ({ item, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shimmerVisible, setShimmerVisible] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => { 
      setImageLoaded(true); // Set image as loaded when it finishes loading
      setShimmerVisible(false); // Hide shimmer placeholder
    }, 500);
  };

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
            {/* Shimmer */}
            {shimmerVisible && (
              <div
                className={`pictureitem--container--item--shimmer ${
                  imageLoaded ? "hidden" : ""
                }`}
              ></div>
            )}
            
            {/* Image */}
            <img
              className={`pictureitem--container--item--img ${
                imageLoaded ? "visible" : ""
              }`}
              ref={ref}
              onClick={open}
              src={image}
              alt={item.name}
              onLoad={handleImageLoad}
              loading="lazy"
            ></img>
            
            {/* Description */}
            <div
              className={`pictureitem--container--item--description ${
                imageLoaded ? "visible" : ""
              }`}
            >
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
