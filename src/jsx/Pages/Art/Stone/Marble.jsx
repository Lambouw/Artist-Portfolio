import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import MarbleData from '../../../../assets/data/stone/marbledata.json';

const Marble = () => {
    // loop over marbledata
    let content = [];
    for (var i = 0; i < MarbleData.length; i++) {
        content.push(<PictureItem key={MarbleData[i].name} item={MarbleData[i]} image={MarbleData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Marmor</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Marble;