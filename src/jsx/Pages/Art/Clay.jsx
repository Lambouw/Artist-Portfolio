import '../../../styles/css/art.css'

import PictureItem from "../../Components/PictureItem";
import GalleryWrapper from "../../Components/GalleryWrapper";

import image1 from "../../../assets/images/webp/clay/Selbstportrait.webp";
import image2 from "../../../assets/images/webp/clay/Sitzende_2.webp";
import image3 from "../../../assets/images/webp/clay/Liegende_2.webp";
import image4 from "../../../assets/images/webp/clay/Sitzende_1.webp";
import image5 from "../../../assets/images/webp/clay/Liegende_1.webp";

import ClayData from "../../../assets/data/claydata.json";

const Clay = () => {
  const clayImages = [image1, image2, image3, image4, image5];

  // loop over claydata
  let content = [];
  for (var i = 0; i < ClayData.length; i++) {
    content.push(
      <PictureItem
        key={ClayData[i].name}
        item={ClayData[i]}
        image={clayImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Ton</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Clay;
