import "../../../../styles/css/art.css";

import PictureItem from "../../../Components/PictureItem";
import GalleryWrapper from "../../../Components/GalleryWrapper";

import image1 from "../../../../assets/images/webp/stone/sandstone/Liegende.webp";

import SandstoneData from "../../../../assets/data/stone/sandstonedata.json";

const Sandstone = () => {
  const sandstoneImages = [image1];

  // loop over sandstonedata
  let content = [];
  for (var i = 0; i < SandstoneData.length; i++) {
    content.push(
      <PictureItem
        key={SandstoneData[i].name}
        item={SandstoneData[i]}
        image={sandstoneImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Sandstein</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Sandstone;
