import "../../../../styles/css/art.css";

import PictureItem from "../../../Components/PictureItem";
import GalleryWrapper from "../../../Components/GalleryWrapper";

import image1 from "../../../../assets/images/webp/stone/limestone/Schreitende.webp";

import LimestoneData from "../../../../assets/data/stone/limestonedata.json";

const Limestone = () => {
  const limestoneImages = [image1];

  // loop over limestonedata
  let content = [];
  for (var i = 0; i < LimestoneData.length; i++) {
    content.push(
      <PictureItem
        key={LimestoneData[i].name}
        item={LimestoneData[i]}
        image={limestoneImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Kalkstein</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Limestone;
