import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import LimestoneData from '../../../../assets/data/stone/limestonedata.json';

// import images
import img1 from '../../../../assets/images/caststone/Kleine_Sitzende.jpeg';
import img2 from '../../../../assets/images/caststone/Stehende_1.jpeg';
import img3 from '../../../../assets/images/caststone/Stehende_2.jpeg';

const images = [img1, img2, img3];

const Limestone = () => {
    // loop over limestonedata
    let content = [];
    for (var i = 0; i < LimestoneData.length; i++) {
        content.push(<PictureItem key={LimestoneData[i].name} item={LimestoneData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Kalkstein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Limestone;