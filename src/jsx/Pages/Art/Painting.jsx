import '../../../styles/css/art.css'

import PictureItem from "../../Components/PictureItem";
import GalleryWrapper from "../../Components/GalleryWrapper";

import image1 from "../../../assets/images/webp/paintings/Maedchen_im_Wind.webp";
import image2 from "../../../assets/images/webp/paintings/Fruehling.webp";
import image3 from "../../../assets/images/webp/paintings/Sommer.webp";

import PaintingData from "../../../assets/data/paintingdata.json";

const Painting = () => {
  const paintingImages = [image1, image2, image3];

  // loop over paintingdata
  let content = [];
  for (var i = 0; i < PaintingData.length; i++) {
    content.push(
      <PictureItem
        key={PaintingData[i].name}
        item={PaintingData[i]}
        image={paintingImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Malerei</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Painting;
