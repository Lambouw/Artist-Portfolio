import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import WoodData from '../../../assets/data/wooddata.json';

// import images
import img1 from '../../../assets/images/wood/Spiegel_in_die_Vergangenheit.jpeg';
import img2 from '../../../assets/images/wood/Flammenspiel_3.jpeg';
import img3 from '../../../assets/images/wood/Aufbruch_in_eine_neue_Welt.jpeg';
import img4 from '../../../assets/images/wood/Leidenschaft_Wirbel_der_Gefuehle.jpeg';
import img5 from '../../../assets/images/wood/Rising_Up.jpeg';
import img6 from '../../../assets/images/wood/Gegensaetze_Vor_und_Zurueck.jpeg';
import img7 from '../../../assets/images/wood/Flammenspiel_1.jpeg';
import img8 from '../../../assets/images/wood/Maedchen_im_Wald.jpeg';
import img9 from '../../../assets/images/wood/Gegensaetze_Liebe_und_Hass.jpeg';
import img10 from '../../../assets/images/wood/Abgetaucht.jpeg';
import img11 from '../../../assets/images/wood/Artisten.jpeg';
import img12 from '../../../assets/images/wood/Gegensaetze_Festhalten_und_Loslassen.jpeg';
import img13 from '../../../assets/images/wood/Fanal.jpeg';
import img14 from '../../../assets/images/wood/Erstes_Projekt_in_Holz.jpeg';
import img15 from '../../../assets/images/wood/Tango.jpeg';
import img16 from '../../../assets/images/wood/Zusammenhalt.jpeg';
import img17 from '../../../assets/images/wood/Gedankenwelten.jpeg';
import img18 from '../../../assets/images/wood/Flammenspiel_2.jpeg';
import img19 from '../../../assets/images/wood/Engelin.jpeg';
import img20 from '../../../assets/images/wood/Zaertlichkeit.jpeg';
import img21 from '../../../assets/images/wood/Lotos.jpeg';
import img22 from '../../../assets/images/wood/Durchgang.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];

const Wood = () => {
    // loop over wooddata
    let content = [];
    for (var i = 0; i < WoodData.length; i++) {
        content.push(<PictureItem key={WoodData[i].name} item={WoodData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Holz</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div >
    );
};

export default Wood;