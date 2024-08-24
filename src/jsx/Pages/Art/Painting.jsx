import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import PaintingData from '../../../assets/data/paintingdata.json';

const Painting = () => {
    // loop over paintingdata
    let content = [];
    for (var i = 0; i < PaintingData.length; i++) {
        content.push(<PictureItem key={PaintingData[i].name} item={PaintingData[i]} image={PaintingData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Malerei</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Painting;