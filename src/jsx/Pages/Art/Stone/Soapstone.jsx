import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import SoapstoneData from '../../../../assets/data/stone/soapstonedata.json';

// // import images
// import img1 from '../../../../assets/images/caststone/Kleine_Sitzende.jpeg';
// import img2 from '../../../../assets/images/caststone/Stehende_1.jpeg';
// import img3 from '../../../../assets/images/caststone/Stehende_2.jpeg';

// const images = [img1, img2, img3];

const Soapstone = () => {
    // loop over soapstoneData
    let content = [];
    for (var i = 0; i < SoapstoneData.length; i++) {
        content.push(<PictureItem key={SoapstoneData[i].name} item={SoapstoneData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Speckstein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Soapstone;