import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import WoodData from '../../../assets/data/wooddata.json';

const Wood = () => {
    // loop over wooddata
    let content = [];
    for (var i = 0; i < WoodData.length; i++) {
        content.push(<PictureItem key={WoodData[i].name} item={WoodData[i]} image={WoodData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Holz</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div >
    );
};

export default Wood;