import "../../../../styles/css/art.css";

import PictureItem from "../../../Components/PictureItem";
import GalleryWrapper from "../../../Components/GalleryWrapper";

import image1 from "../../../../assets/images/webp/stone/alabaster/Faltenstein_1.webp";
import image2 from "../../../../assets/images/webp/stone/alabaster/Faltenstein_2.webp";
import image3 from "../../../../assets/images/webp/stone/alabaster/Spannungsfeld.webp";

import AlabasterData from "../../../../assets/data/stone/alabasterdata.json";

const Alabaster = () => {
  const alabasterImages = [image1, image2, image3];

  // loop over alabasterdata
  let content = [];
  for (var i = 0; i < AlabasterData.length; i++) {
    content.push(
      <PictureItem
        key={AlabasterData[i].name}
        item={AlabasterData[i]}
        image={alabasterImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Alabaster</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Alabaster;
