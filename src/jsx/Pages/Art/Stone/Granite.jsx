import "../../../../styles/css/art.css";

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import image1 from '../../../../assets/images/webp/stone/granite/Granite.webp';

import GraniteData from '../../../../assets/data/stone/granitedata.json';

const Granite = () => {
    const graniteImages = [image1];

    // loop over granitedata
    let content = [];
    for (var i = 0; i < GraniteData.length; i++) {
        content.push(<PictureItem key={GraniteData[i].name} item={GraniteData[i]} image={graniteImages[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Granit</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Granite;