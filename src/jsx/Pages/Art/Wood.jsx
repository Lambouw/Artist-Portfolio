import '../../../styles/css/art.css'

import PictureItem from "../../Components/PictureItem";
import GalleryWrapper from "../../Components/GalleryWrapper";

import image1 from "../../../assets/images/webp/wood/Maedchen_im_Wald.webp";
import image2 from "../../../assets/images/webp/wood/Rising_Up.webp";
import image3 from "../../../assets/images/webp/wood/Gegensaetze_Liebe_und_Hass.webp";
import image4 from "../../../assets/images/webp/wood/Gegensaetze_Festhalten_und_Loslassen.webp";
import image5 from "../../../assets/images/webp/wood/Gegensaetze_Vor_und_Zurueck.webp";
import image6 from "../../../assets/images/webp/wood/Leidenschaft.webp";
import image7 from "../../../assets/images/webp/wood/Spiegel_der_Vergangenheit.webp";
import image8 from "../../../assets/images/webp/wood/Fanal.webp";
import image9 from "../../../assets/images/webp/wood/Tango.webp";
import image10 from "../../../assets/images/webp/wood/Flammenspiel_1.webp";
import image11 from "../../../assets/images/webp/wood/Flammenspiel_2.webp";
import image12 from "../../../assets/images/webp/wood/Flammenspiel_3.webp";
import image13 from "../../../assets/images/webp/wood/Gedankenwelt.webp";
import image14 from "../../../assets/images/webp/wood/Zaertlichkeit.webp";
import image15 from "../../../assets/images/webp/wood/Stehende.webp";
import image16 from "../../../assets/images/webp/wood/Erstes_Projekt_in_Holz.webp";
import WoodData from "../../../assets/data/wooddata.json";

const Wood = () => {
  const woodImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  // loop over wooddata
  let content = [];
  for (var i = 0; i < WoodData.length; i++) {
    content.push(
      <PictureItem
        key={WoodData[i].name}
        item={WoodData[i]}
        image={woodImages[i]}
      ></PictureItem>
    );
  }

  return (
    <div className="art">
      <h1 className="art--title">Holz</h1>
      <GalleryWrapper content={content}></GalleryWrapper>
    </div>
  );
};

export default Wood;
