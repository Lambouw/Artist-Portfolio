import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import CaststoneData from '../../../assets/data/caststonedata.json';

// import images
import img1 from '../../../assets/images/caststone/Kleine_Sitzende.jpeg';
import img2 from '../../../assets/images/caststone/Stehende_1.jpeg';
import img3 from '../../../assets/images/caststone/Stehende_2.jpeg';
import img4 from '../../../assets/images/caststone/Sitzende.jpeg';
import img5 from '../../../assets/images/caststone/Tanzende.jpeg';
import img6 from '../../../assets/images/caststone/Stehende_3.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

const Caststone = () => {
    // loop over caststonedata
    let content = [];
    for (var i = 0; i < CaststoneData.length; i++) {
        content.push(<PictureItem key={CaststoneData[i].name} item={CaststoneData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Guss</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Caststone;