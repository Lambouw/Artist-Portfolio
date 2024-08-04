import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import GraniteData from '../../../../assets/data/stone/limestonedata.json';

// import images
import img1 from '../../../../assets/images/stone/Schreitende_(Kalkstein).jpeg';

const images = [img1];

const Granite = () => {
    // loop over granitedata
    let content = [];
    for (var i = 0; i < GraniteData.length; i++) {
        content.push(<PictureItem key={GraniteData[i].name} item={GraniteData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Granit</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Granite;