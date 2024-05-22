import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import SandstoneData from '../../../../assets/data/stone/sandstonedata.json';

// import images
import img1 from '../../../../assets/images/caststone/Kleine_Sitzende.jpeg';
import img2 from '../../../../assets/images/caststone/Stehende_1.jpeg';
import img3 from '../../../../assets/images/caststone/Stehende_2.jpeg';

const images = [img1, img2, img3];

const Sandstone = () => {
    // loop over sandstonedata
    let content = [];
    for (var i = 0; i < SandstoneData.length; i++) {
        content.push(<PictureItem key={SandstoneData[i].name} item={SandstoneData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Sandstein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Sandstone;