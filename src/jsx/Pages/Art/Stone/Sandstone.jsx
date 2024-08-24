import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import SandstoneData from '../../../../assets/data/stone/sandstonedata.json';

const Sandstone = () => {
    // loop over sandstonedata
    let content = [];
    for (var i = 0; i < SandstoneData.length; i++) {
        content.push(<PictureItem key={SandstoneData[i].name} item={SandstoneData[i]} image={SandstoneData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Sandstein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Sandstone;