import "../../../../styles/css/art.css";

import PictureItem from "../../../Components/PictureItem";
import GalleryWrapper from "../../../Components/GalleryWrapper";

import image1 from "../../../../assets/images/webp/stone/marble/Ein_gutes_Leben.webp";
import image2 from "../../../../assets/images/webp/stone/marble/Portrait.webp";
import image3 from "../../../../assets/images/webp/stone/marble/Shelter.webp";
import image4 from "../../../../assets/images/webp/stone/marble/Marmorbueste_einer_Taenzerin.webp";
import image5 from "../../../../assets/images/webp/stone/marble/Liegende.webp";
import image6 from "../../../../assets/images/webp/stone/marble/Kleine_Dicke_im_Stein.webp";

import MarbleData from "../../../../assets/data/stone/marbledata.json";

const Marble = () => {
  const marbleImages = [image1, image2, image3, image4, image5, image6];

  // loop over marbledata
  let content = [];
  for (var i = 0; i < MarbleData.length; i++) {
    content.push(
      <PictureItem
        key={MarbleData[i].name}
        item={MarbleData[i]}
        image={marbleImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Marmor</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Marble;
