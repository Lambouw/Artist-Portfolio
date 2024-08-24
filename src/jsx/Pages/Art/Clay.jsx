import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import ClayData from '../../../assets/data/claydata.json';

const Clay = () => {
    // loop over claydata
    let content = [];
    for (var i = 0; i < ClayData.length; i++) {
        content.push(<PictureItem key={ClayData[i].name} item={ClayData[i]} image={ClayData[i].src}></PictureItem>);
    }
    
    return (
        <div className="art">
            <h1 className="art--title">Ton</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Clay;