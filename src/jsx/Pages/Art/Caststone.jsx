import '../../../styles/css/art.css'

import PictureItem from "../../Components/PictureItem";
import GalleryWrapper from "../../Components/GalleryWrapper";

import image1 from "../../../assets/images/webp/caststone/Kleine_Sitzende.webp";
import image2 from "../../../assets/images/webp/caststone/Stehende_1.webp";
import image3 from "../../../assets/images/webp/caststone/Stehende_2.webp";
import image4 from "../../../assets/images/webp/caststone/Sitzende.webp";
import image5 from "../../../assets/images/webp/caststone/Tanzende.webp";
import image6 from "../../../assets/images/webp/caststone/Stehende_3.webp";

import CaststoneData from "../../../assets/data/caststonedata.json";

const Caststone = () => {
  const caststoneImages = [image1, image2, image3, image4, image5, image6];

  // loop over caststonedata
  let content = [];
  for (var i = 0; i < CaststoneData.length; i++) {
    content.push(
      <PictureItem
        key={CaststoneData[i].name}
        item={CaststoneData[i]}
        image={caststoneImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Guss</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Caststone;
